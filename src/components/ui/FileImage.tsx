import { Avatar, AvatarFallback, AvatarImage, Spinner } from '@heroui/react';
import { IoCameraOutline } from '@icons';
import type { ChangeEvent } from 'react';
import { useAddImageUser } from '@hooks';
import { useUser } from '@state';
import { notify } from '../custom/CustomToast';
import { CustomButtonIcon } from '@components';

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
            <Avatar className="w-32 h-32 outline-2 outline-accent" color="accent">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback className='text-2xl'>{user?.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <input type="file" id="file-input" style={{ display: 'none' }} onChange={handleFileChange} />
            <CustomButtonIcon variant="primary" onPress={handleClick} className="absolute bottom-0 right-1/3 border-foreground-50 bg-primary rounded-full">
                {isAdding ? <Spinner color="current" size="sm" /> : <IoCameraOutline />}
            </CustomButtonIcon>
        </div>
    );
}
