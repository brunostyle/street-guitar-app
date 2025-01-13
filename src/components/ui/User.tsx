import { Avatar, Popover, Spacer, User as NextUser, PopoverTrigger, PopoverContent, Button, Progress } from "@nextui-org/react";
import { ChangeEvent } from "react";
import { useUser } from "@state";
import { File } from "@components";
import { useAddUserImage } from "@hooks";

export const User = () => {
   const { user } = useUser();
   const { addUserImage, isAdding } = useAddUserImage({ user });

   const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
      const [file] = e.target.files!;
      addUserImage(file)
   };

   return (
      <Popover radius="sm" offset={20}>
         <PopoverTrigger>
            <Button isIconOnly size="sm" variant="light">
               <Avatar size="sm" color="primary" showFallback name={user?.name.charAt(0).toUpperCase()} src={user?.avatar} />
            </Button>
         </PopoverTrigger>
         <PopoverContent className="px-4 py-3">
            <NextUser
               avatarProps={{ size: 'sm', showFallback: true, src: user?.avatar, color: 'primary', name: user?.name.charAt(0).toUpperCase() }}
               name={user?.name}
               description={user?.email}
            />
            <Spacer y={4} />
            {isAdding && <Progress label="Subiendo imagen" size="sm" className="mb-4" isIndeterminate />}
            <File label={user?.avatar ? "Cambiar imagen" : "Subir imagen"} onChange={handleImage} />
         </PopoverContent>
      </Popover>
   )
}