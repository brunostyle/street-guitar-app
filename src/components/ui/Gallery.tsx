import { Avatar, AvatarFallback, AvatarImage, Skeleton } from "@heroui/react"
import { IoImageOutline } from "@icons";
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
        <section className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-3 order-1 lg:order-first flex justify-center">
                <div className="preview_container">
                    {isLoading
                        ? [1, 2].map(num => <Skeleton key={num} className="w-full h-36 rounded-3xl" />)
                        : images.map(image => (
                            <Avatar
                                key={image}
                                onClick={() => setSelected(image)}
                                className={`opacity w-full h-36 rounded-2xl cursor-pointer ${image === selected && 'outline-2 outline-accent'}`}
                            >
                                <AvatarImage src={image} className="object-cover" />
                                <AvatarFallback><IoImageOutline /></AvatarFallback>
                            </Avatar>
                        ))}
                </div>
            </div>
            <div className="col-span-12 lg:col-span-9">
                {isLoading
                    ? <Skeleton className="w-full h-137.5 rounded-3xl" />
                    : <Avatar className="w-full h-137.5 rounded-lg shadow-outset">
                        <AvatarImage src={selected} className="object-cover" />
                        <AvatarFallback><IoImageOutline /></AvatarFallback>
                    </Avatar>
                }
            </div>
        </section>
    )
}