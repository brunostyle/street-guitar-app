import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationNextIcon, PaginationPrevious, PaginationPreviousIcon } from "@heroui/react";

interface IProps {
    page: number;
    total: number;
    setPage: (newPage: number) => void;
}

export const CustomPagination = ({ page, setPage, total }: IProps) => {
    const pages = Array.from({ length: total }, (_, i) => i + 1);
    return (
        <Pagination size="sm" className="mt-4 justify-center">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious isDisabled={page === 1} onPress={() => setPage(page - 1)}>
                        <PaginationPreviousIcon />
                    </PaginationPrevious>
                </PaginationItem>
                {pages.map((p) => (
                    <PaginationItem key={p}>
                        <PaginationLink isActive={p === page} onPress={() => setPage(p)}>
                            {p}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext isDisabled={page === total} onPress={() => setPage(page + 1)}>
                        <PaginationNextIcon />
                    </PaginationNext>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}