import { Card } from "@nextui-org/card";
import { useTheme } from "next-themes";

import { capitalizeFirstLetter } from "@/utils/capitalize";
import { postTitle, postText } from "@/components/primitives";
import { Post } from "@/types";

export const PostCard = ({ title, body }: Post) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <Card
      className="w-full max-w-[768px] space-y-5 p-4 min-h-48 mx-auto py-10"
      radius="lg"
    >
      <div
        className={
          isDarkTheme
            ? postTitle({ size: "sm", color: "blue" })
            : postTitle({ size: "sm", color: "green" })
        }
      >
        {capitalizeFirstLetter(title)}
      </div>

      <div className={postText({ class: "rounded-lg text-lg" })}>
        {capitalizeFirstLetter(body)}
      </div>
    </Card>
  );
};
