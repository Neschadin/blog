"use client";

import type { Post } from "@/types";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Modal, useDisclosure } from "@nextui-org/modal";

import { capitalizeFirstLetter } from "@/utils/capitalize";
import { BlogLoader } from "@/components/blog-loader";
import { ModalContent } from "@/components/modal-content";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const handleOpenModal = (postId: number) => {
    const post = posts.find((p) => p.id === postId);

    if (post) {
      setSelectedPost(post);
      onOpen();
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500)); // simulate data loading delay;

        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();

        setPosts(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error >>", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="flex-col items-center justify-center gap-4">
      <h1 className="text-[2.3rem] lg:text-5xl leading-9 text-center mb-10">
        Blog Posts
      </h1>

      <div className="mx-auto flex flex-col gap-4 max-w-[500px]">
        {isLoading && <BlogLoader />}

        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader onClick={() => router.push(`/blog/${post.id}`)}>
              <h3 className="text-md md:text-lg md:font-semibold lg:text-xl text-default-600 cursor-pointer hover:scale-[1.01] transition-transform dark:text-red-600">
                {capitalizeFirstLetter(post.title)}
              </h3>
            </CardHeader>
            <CardBody>
              <p className="truncate">{capitalizeFirstLetter(post.body)}</p>
            </CardBody>
            <CardFooter>
              <Button size="sm" onClick={() => handleOpenModal(post.id)}>
                Read full text
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Modal
        hideCloseButton
        isOpen={isOpen}
        size="3xl"
        onOpenChange={onOpenChange}
      >
        {selectedPost && <ModalContent {...selectedPost} />}
      </Modal>
    </section>
  );
}
