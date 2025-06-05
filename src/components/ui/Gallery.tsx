import { Avatar } from "@heroui/react"
import { useState } from "react"

interface IProps {
    images: string[];
}

export const Gallery = ({ images }: IProps) => {
    const [selected, setSelected] = useState(images[0]);
    return (
        <section className="grid grid-cols-12 gap-4 p-4">
            <div className="col-span-12 md:col-span-3 order-1 md:order-first flex justify-center">
                <div className="flex md:flex-col gap-4 max-w-80">
                    {images.map(image => (
                        <Avatar
                            key={image}
                            src={image}
                            radius="sm"
                            isBordered
                            onClick={() => setSelected(image)}
                            className={`w-full h-36 object-fill cursor-pointer ${image !== selected && 'shadow-outset'}`}
                        />
                    ))}
                </div>
            </div>
            <div className="col-span-12 md:col-span-9">
                <img className="w-full h-[550px] rounded-lg shadow-outset object-cover" src={selected} />
            </div>
        </section>
    )
}