import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

export const PostLoader = () => {
  return (
    <Card
      className="w-full max-w-[768px] space-y-5 p-4 min-h-48 mx-auto py-10"
      radius="lg"
    >
      <Skeleton className={"rounded-lg h-10 w-1/2"} />
      <Skeleton className={"rounded-lg w-full h-24"} />
    </Card>
  );
};
