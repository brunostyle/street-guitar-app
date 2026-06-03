import type { ChangeEvent } from "react";
import { useParams } from "react-router";
import { useField } from "formik";
import { useAddImage, useDeleteImage } from "@hooks";
import { FileCover, notify } from "@components";
import { fetcherWithToken } from "@fetch";
import { Flex, Gap } from "@styles";
import { Label, ProgressBar, ProgressBarFill, ProgressBarTrack } from "@heroui/react";

export const Images = () => {
   const { id } = useParams();
   const { addImage, isAdding } = useAddImage();
   const { deleteImage, isDeleting } = useDeleteImage();
   const [image, _imageMeta, imageHelpers] = useField('image');
   const [thumbnail, _thumbnailMeta, thumbnailHelpers] = useField('thumbnail');

   const handleDelete = (url: string) => {
      deleteImage({ url }, {
         onSuccess: async () => {
            if (url === image.value) {
               imageHelpers.setValue('');
               if (id) {
                  await fetcherWithToken({ endpoint: '/products/' + id, method: 'PUT', data: { image: '' } });
               }
            } else if (url === thumbnail.value) {
               thumbnailHelpers.setValue('');
               if (id) {
                  await fetcherWithToken({ endpoint: '/products/' + id, method: 'PUT', data: { thumbnail: '' } });
               }
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
            imageHelpers.setValue(url);
            if (id) {
               await fetcherWithToken({ endpoint: '/products/' + id, method: 'PUT', data: { image: url } });
            }
         }
      })
   };

   const handleThumbnail = (e: ChangeEvent<HTMLInputElement>) => {
      const [file] = e.target.files!;
      const extension = file.name.split('.').pop();
      if (!['jpg', 'jpeg', 'png', 'jfif'].includes(extension!)) return notify.error('Extension no valida')
      addImage({ file }, {
         onSuccess: async (url) => {
            thumbnailHelpers.setValue(url);
            if (id) {
               await fetcherWithToken({ endpoint: '/products/' + id, method: 'PUT', data: { thumbnail: url } });
            }
         }
      })
   };

   return (
      <Gap>
         <Label>Vista previa</Label>
         <Flex className="gap-x-8 justify-center flex-wrap">
            <FileCover id="image-cover" label="imagen" image={image.value && image.value} isLoading={isAdding || isDeleting} onChange={handleImage} onDelete={handleDelete} />
            <FileCover id="image-tab" label="thumbnail" image={thumbnail.value && thumbnail.value} isLoading={isAdding || isDeleting} onChange={handleThumbnail} onDelete={handleDelete} />
         </Flex>
         {isAdding &&
            <ProgressBar size="sm" isIndeterminate>
               <Label>Subiendo imagen</Label>
               <ProgressBarTrack>
                  <ProgressBarFill />
               </ProgressBarTrack>
            </ProgressBar>
         }
         {isDeleting &&
            <ProgressBar size="sm" isIndeterminate>
               <Label>Eliminando imagen</Label>
               <ProgressBarTrack>
                  <ProgressBarFill />
               </ProgressBarTrack>
            </ProgressBar>
         }
      </Gap>
   )
}