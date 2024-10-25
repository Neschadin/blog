"use client";

import { useEffect, useState } from "react";

import { Post } from "@/types";
import { PostLoader } from "@/components/post-loader";
import { PostCard } from "@/components/post-card";

export default function BlogPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!params.id) return;

    const fetchBlog = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500)); // simulate data loading delay;

        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.id}`,
        );
        const data = await res.json();

        setPost(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error >>", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [params]);

  return (
    <>
      {isLoading && <PostLoader />}
      {!isLoading && post && <PostCard {...post} />}
    </>
  );
}
