import { Card, CardContent, CardFooter, Skeleton } from "@heroui/react";
import { Between, WrapFill } from "@styles";

interface ProductSkeletonProps {
    count?: number;
}

export const ProductSkeleton = ({ count = 18 }: ProductSkeletonProps) => (
    <WrapFill>
        {Array(count).fill(0).map((_, index) => (
            <Card key={index} className="shadow-inset p-0">
                <Skeleton className="h-92.5" />
                <CardContent className="space-y-3 px-4">
                    <Skeleton className="w-3/5 h-3 rounded-3xl" />
                    <Skeleton className="w-2/5 h-3 rounded-3xl" />
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <Between>
                        <Skeleton className="w-1/4 h-4 rounded-3xl" />
                        <Skeleton className="w-6 h-6 rounded-3xl" />
                    </Between>
                </CardFooter>
            </Card>
        ))}
    </WrapFill >
);