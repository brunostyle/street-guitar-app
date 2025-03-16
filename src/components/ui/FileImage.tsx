import { Avatar, Button, Spinner } from '@heroui/react';
import { MdOutlineCameraAlt } from '@icons';
import { ChangeEvent } from 'react';
import { useAddImageUser } from '@hooks';
import { useUser } from '@state';
import { notify } from '../custom/CustomToast';

export const FileImage = () => {
    const { addImage, isAdding } = useAddImageUser();
    const { user } = useUser();
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const [file] = e.target.files!;
        const extension = file.name.split('.').pop();
        if (!['jpg', 'jpeg', 'png', 'jfif'].includes(extension!)) return notify.error('Extension no valida')
        addImage({ file });
    };

    const handleClick = () => {
        document.getElementById('file-input')?.click();
    };

    return (
        <div className="flex justify-center my-4 relative">
            <Avatar isBordered showFallback color="primary" name={user?.name.charAt(0).toUpperCase()} src={user?.avatar} className="w-32 h-32 text-2xl" />
            <input type="file" id="file-input" style={{ display: 'none' }} onChange={handleFileChange} />
            <Button onPress={handleClick} isIconOnly size="sm" color="primary" radius="full" className="absolute bottom-0 right-1/3 border-small border-foreground-50">
                {isAdding ? <Spinner size="sm" color="white" variant="spinner" /> : <MdOutlineCameraAlt />}
            </Button>
        </div>
    );
}
