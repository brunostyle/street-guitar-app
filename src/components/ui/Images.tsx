import { Badge, Image, Progress } from "@nextui-org/react";
import { ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { useField } from "formik";
import { MdClose } from "@icons";
import { useAddFile, useDeleteFile } from "@hooks";
import { File } from "@components";
import { fetcherWithToken } from "@fetch";

export const Images = () => {
   const { id } = useParams();
   const { addFile, isAdding } = useAddFile();
   const { deleteFile, isDeleting } = useDeleteFile();
   const [field, _meta, helpers] = useField('images');

   const handleDelete = (url: string) => {
      deleteFile({ url, type: 'products' }, {
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
      addFile({ file, type: 'products' }, {
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
         <File onChange={handleImage} />
      </div>
   )
}