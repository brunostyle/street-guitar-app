import { Badge, Image, Progress } from "@heroui/react";
import { ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { useField } from "formik";
import { MdClose } from "@icons";
import { useAddImage, useDeleteImage } from "@hooks";
import { File } from "@components";
import { fetcherWithToken } from "@fetch";
import toast from "react-hot-toast";

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
      if (!['jpg', 'jpeg', 'png', 'jfif'].includes(extension!)) return toast.error('Extension no valida')
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
      <div className="flex gap-2 justify-evenly flex-wrap">
         {field.value && field.value.map((img: string) => (
            <Badge key={img} content={<MdClose />} onClick={() => handleDelete(img)} size="lg" color="primary" variant="shadow" isOneChar className="cursor-pointer">
               <Image src={img} width="120px" height="120px" className="object-cover" />
            </Badge>
         ))}
         {isAdding && <Progress label="Subiendo imagen" size="sm" className="mb-4" isIndeterminate />}
         {isDeleting && <Progress label="Eliminando imagen" size="sm" className="mb-4" isIndeterminate />}
         <File id="image" label="Cargar imagen" onChange={handleImage} />
      </div>
   )
}