import { Button } from '@heroui/react';
import { AiOutlineCloudUpload } from "@icons";

interface IProps {
	id: string;
	label: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const File = ({ id, label, onChange }: IProps) => {
	const handleClick = () => {
		document.getElementById(id)?.click();
	};
	return <>
		<input onChange={onChange} type="file" id={id} style={{ display: 'none' }} />
		<Button fullWidth size="sm" variant="bordered" onPress={handleClick} startContent={<AiOutlineCloudUpload />}>{label}</Button>
	</>
}