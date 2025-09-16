import { IoImageOutline, IoCloseOutline } from "@icons";
import { Avatar, Badge } from "@heroui/react";

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
		<Badge isInvisible={!!!image} content={<IoCloseOutline />} onClick={() => onDelete(image!)} color="primary" variant="faded" isOneChar showOutline={false} className="cursor-pointer">
			<Avatar
				showFallback
				radius="sm"
				src={image}
				onClick={handleClick}
				isDisabled={isLoading}
				fallback={<IoImageOutline size={15} />}
				className={`object-cover w-[120px] h-[120px] bg-content2 ${!isLoading && 'cursor-pointer'}`}
			/>
		</Badge>
	</>
}