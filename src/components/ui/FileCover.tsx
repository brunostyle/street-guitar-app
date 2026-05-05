import { IoImageOutline, IoCloseOutline } from "@icons";
import { Avatar, AvatarFallback, AvatarImage, Badge, BadgeAnchor } from "@heroui/react";

interface IProps {
	id: string;
	image?: string;
	isLoading: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onDelete: (url: string) => void;
}

export const FileCover = ({ id, image, isLoading, onChange, onDelete }: IProps) => {
	const handleClick = () => {
		if (image) return;
		if (isLoading) return;
		document.getElementById(id)?.click();
	};
	return <>
		<input onChange={onChange} type="file" id={id} style={{ display: 'none' }} />
		<BadgeAnchor>
			<Avatar onClick={handleClick} className={`object-cover rounded-4xl size-32 shadow-outset ${!isLoading && 'cursor-pointer'}`}>
				<AvatarImage src={image} />
				<AvatarFallback><IoImageOutline size={15} /></AvatarFallback>
			</Avatar>
			{!!image && <Badge className="cursor-pointer" onClick={() => onDelete(image!)}><IoCloseOutline /></Badge>}
		</BadgeAnchor >
	</>
}