import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

export const BlogLoader = () =>
  Array.from({ length: 8 }).map((_, i) => (
    <Card key={i} className="h-44">
      <CardHeader>
        <Skeleton className="h-10 w-1/2 rounded-lg" />
      </CardHeader>
      <CardBody>
        <Skeleton className="h-8 w-full rounded-lg" />
      </CardBody>
      <CardFooter>
        <Skeleton className="h-8 w-1/4 rounded-lg" />
      </CardFooter>
    </Card>
  ));
