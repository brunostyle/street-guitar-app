import { Avatar, Skeleton } from "@heroui/react"
import { useEffect, useState } from "react"

interface IProps {
    images: string[];
    isLoading: boolean;
}

export const Gallery = ({ images = [], isLoading }: IProps) => {
    const [selected, setSelected] = useState<string>();

    useEffect(() => {
        setSelected(images[0]);
    }, [isLoading]);

    return (
        <section className="grid grid-cols-12 gap-4 p-3">
            <div className="col-span-12 md:col-span-3 order-1 md:order-first flex justify-center">
                <div className="flex md:flex-col gap-4 w-full max-w-64">
                    {isLoading
                        ? [1, 2].map(num => <Skeleton key={num} className="w-full h-36 rounded-lg" />)
                        : images.map(image => (
                            <Avatar
                                key={image}
                                src={image}
                                radius="sm"
                                isBordered
                                onClick={() => setSelected(image)}
                                className={`opacity w-full h-36 object-fill cursor-pointer ${image !== selected && 'shadow-outset'}`}
                            />
                        ))}
                </div>
            </div>
            <div className="col-span-12 md:col-span-9">
                <Skeleton className="w-full h-[550px] rounded-lg" isLoaded={!isLoading}>
                    <img className="w-full h-[550px] rounded-lg shadow-outset object-cover" src={selected} />
                </Skeleton>
            </div>
        </section>
    )
}