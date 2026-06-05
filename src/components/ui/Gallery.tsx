import { Avatar, AvatarFallback, AvatarImage, Badge, BadgeAnchor, Modal, ModalBackdrop, ModalBody, ModalCloseTrigger, ModalContainer, ModalDialog, Skeleton } from "@heroui/react"
import { IoImageOutline, IoScanOutline } from "@icons";
import { useEffect, useState } from "react"

interface IProps {
    image: string;
    thumbnail: string;
    isLoading: boolean;
}

export const Gallery = ({ image, thumbnail, isLoading }: IProps) => {
    const [selected, setSelected] = useState<string>();
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setSelected(image);
    }, [isLoading]);

    return (
        <section className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-3 order-1 lg:order-first flex justify-center">
                <div className="preview_container">
                    {isLoading
                        ? [1, 2].map(num => <Skeleton key={num} className="w-full h-36 rounded-3xl" />)
                        : <>
                            <Avatar onClick={() => setSelected(image)} className={`opacity shadow-outset w-full h-36 rounded-2xl cursor-pointer ${image === selected && 'outline-2 outline-accent'}`}>
                                <AvatarImage src={image} className="object-cover" />
                                <AvatarFallback><IoImageOutline /></AvatarFallback>
                            </Avatar>
                            <Avatar onClick={() => setSelected(thumbnail)} className={`opacity shadow-outset w-full h-36 rounded-2xl cursor-pointer ${thumbnail === selected && 'outline-2 outline-accent'}`}>
                                <AvatarImage src={thumbnail} />
                                <AvatarFallback><IoImageOutline /></AvatarFallback>
                            </Avatar>
                        </>
                    }
                </div>
            </div>
            <div className="col-span-12 lg:col-span-9">
                {isLoading
                    ? <Skeleton className="w-full h-137.5 rounded-3xl" />
                    :
                    <BadgeAnchor className="w-full">
                        <Avatar className="w-full h-137.5 rounded-lg shadow-outset">
                            <AvatarImage src={selected} className="object-cover" />
                            <AvatarFallback><IoImageOutline /></AvatarFallback>
                        </Avatar>
                        <Modal>
                            {thumbnail && thumbnail === selected && <Badge className="top-4 right-4 cursor-pointer" onClick={() => setIsOpen(true)}><IoScanOutline /></Badge>}
                            <ModalBackdrop isOpen={isOpen} onOpenChange={setIsOpen}>
                                <ModalContainer size="full">
                                    <ModalDialog className="p-0">
                                        <ModalCloseTrigger className="z-1" />
                                        <ModalBody>
                                            <Avatar className="w-full min-h-full overflow-y-auto scrollbar-none">
                                                <AvatarImage src={thumbnail} className="h-full lg:h-auto" />
                                            </Avatar>
                                        </ModalBody>
                                    </ModalDialog>
                                </ModalContainer>
                            </ModalBackdrop>
                        </Modal>
                    </BadgeAnchor>
                }
            </div>
        </section>
    )
}