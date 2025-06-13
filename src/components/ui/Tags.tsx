import { Chip } from "@heroui/react";
import { useState } from "react";
import { useField } from "formik";
import { CustomButtonIcon, CustomInputTags } from "@components";
import { IoPricetagsOutline, IoAddOutline } from "@icons";
import { Flex, Gap } from "@styles";

export const Tags = () => {
   const [field, _meta, helpers] = useField('tags');
   const [tagValue, setTagValue] = useState<string>('');

   const removeTag = (tag: string) => {
      helpers.setValue(field.value.filter((t: string) => t !== tag))
   }

   const addTag = () => {
      if (tagValue === "") return;
      const newTag = tagValue.trim().toLowerCase();
      if (field.value.includes(newTag)) return;
      setTagValue('');
      helpers.setValue([...field.value, newTag])
   }

   return (
      <Gap>
         <CustomInputTags label="Etiquetas" value={tagValue} onChange={setTagValue} addTag={addTag} content={
            <CustomButtonIcon variant="light" onPress={addTag}><IoAddOutline /></CustomButtonIcon>
         } />
         <Flex space="gap-2">
            {field.value && field.value.map((tag: string) => (
               <Chip key={tag} color="primary" size="sm" variant="flat" onClose={() => removeTag(tag)} className="gap-1" startContent={<IoPricetagsOutline />}>{tag}</Chip>
            ))}
         </Flex>
      </Gap>

   )
};
