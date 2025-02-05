import { AiOutlineCloudUpload } from "@icons";
import { CustomButton } from "@components";

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
		<CustomButton fullWidth variant="bordered" onPress={handleClick} startContent={<AiOutlineCloudUpload />}>{label}</CustomButton>
	</>
}