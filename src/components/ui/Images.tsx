import { Progress } from "@heroui/react";
import type { ChangeEvent } from "react";
import { useParams } from "react-router";
import { useField } from "formik";
import { useAddImage, useDeleteImage } from "@hooks";
import { FileCover, notify } from "@components";
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
         <Flex className="gap-x-8 justify-center flex-wrap">
            <FileCover id="image-cover" image={field.value && field.value[0]} isLoading={isAdding || isDeleting} onChange={handleImage} onDelete={handleDelete} />
            <FileCover id="image-tab" image={field.value && field.value[1]} isLoading={isAdding || isDeleting} onChange={handleImage} onDelete={handleDelete} />
         </Flex>
         {isAdding && <Progress label="Subiendo imagen" size="sm" isIndeterminate />}
         {isDeleting && <Progress label="Eliminando imagen" size="sm" isIndeterminate />}
      </Gap>
   )
}