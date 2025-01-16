import { Button } from '@nextui-org/react';
import { AiOutlineCloudUpload } from "@icons";

interface IProps {
	label: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const File = ({ label, onChange }: IProps) => {
	const handleClick = () => {
		document.getElementById('file-input')?.click();
	};
	return <>
		<input onChange={onChange} type="file" id="file-input" style={{ display: 'none' }} />
		<Button fullWidth size="sm" variant="bordered" onPress={handleClick} startContent={<AiOutlineCloudUpload />}>{label}</Button>
	</>
}