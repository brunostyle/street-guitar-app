import { Badge, Image, Progress } from "@heroui/react";
import type { ChangeEvent } from "react";
import { useParams } from "react-router";
import { useField } from "formik";
import { IoCloseOutline } from "@icons";
import { useAddImage, useDeleteImage } from "@hooks";
import { File, notify } from "@components";
import { fetcherWithToken } from "@fetch";
import { Flex, Gap } from "@styles";

export const Images = () => {
   const { id } = useParams();
   const { addImage, isAdding } = useAddImage();
   const { deleteImage, isDeleting } = useDeleteImage();
   const [field, _meta, helpers] = useField('images');

   const handleDelete = (url: string) => {
      deleteImage({ url }, {
         onSuccess: async () => {
            const images = field.value.filter((image: string) => image !== url)
            helpers.setValue(images);
            if (id) {
               await fetcherWithToken({ endpoint: '/products/' + id, method: 'PUT', data: { images } });
            }
         }
      });
   }

   const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
      const [file] = e.target.files!;
      const extension = file.name.split('.').pop();
      if (!['jpg', 'jpeg', 'png', 'jfif'].includes(extension!)) return notify.error('Extension no valida')
      addImage({ file }, {
         onSuccess: async (url) => {
            const images = [...field.value, url];
            helpers.setValue(images);
            if (id) {
               await fetcherWithToken({ endpoint: '/products/' + id, method: 'PUT', data: { images } });
            }
         }
      })
   };
   return (
      <Gap>
         {field.value && field.value.length !== 0 &&
            <Flex className="justify-evenly flex-wrap">
               {field.value.map((img: string) => (
                  <Badge key={img} content={<IoCloseOutline />} onClick={() => handleDelete(img)} color="primary" variant="shadow" isOneChar showOutline={false} className="cursor-pointer">
                     <Image src={img} width="120px" height="120px" className="object-cover" />
                  </Badge>
               ))}
            </Flex>
         }
         {isAdding && <Progress label="Subiendo imagen" size="sm" isIndeterminate />}
         {isDeleting && <Progress label="Eliminando imagen" size="sm" isIndeterminate />}
         <File id="image" label="Cargar imagen" onChange={handleImage} />
      </Gap>
   )
}