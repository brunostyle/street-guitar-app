import { Card, CardBody, CardFooter, Skeleton } from "@heroui/react";
import { Between, Wrap } from "@styles";

interface ProductSkeletonProps {
    count?: number;
}

export const ProductSkeleton = ({ count = 8 }: ProductSkeletonProps) => (
    <Wrap>
        {Array(count).fill(0).map((_, index) => (
            <Card key={index} radius="lg">
                <Skeleton className="rounded-md">
                    <div className="h-[370px]" />
                </Skeleton>
                <CardBody className="space-y-3">
                    <Skeleton className="w-3/5 rounded-md">
                        <div className="h-3" />
                    </Skeleton>
                    <Skeleton className="w-2/5 rounded-md">
                        <div className="h-3" />
                    </Skeleton>
                </CardBody>
                <CardFooter>
                    <Between>
                        <Skeleton className="w-1/5 rounded-md">
                            <div className="h-4" />
                        </Skeleton>
                        <Skeleton className="w-5 rounded-lg">
                            <div className="h-5" />
                        </Skeleton>
                    </Between>
                </CardFooter>
            </Card>
        ))}
    </Wrap >
);