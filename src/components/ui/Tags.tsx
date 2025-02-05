import { Chip } from "@heroui/react";
import { useState } from "react";
import { useField } from "formik";
import { CustomIconButton, InputTags } from "@components";
import { GrAdd } from "@icons";

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
      <div>
         <InputTags label="Etiquetas" value={tagValue} onChange={setTagValue} addTag={addTag} content={
            <CustomIconButton variant="light" onPress={addTag}><GrAdd /></CustomIconButton>
         }/>
         <div className="flex gap-1 mt-4">
            {field.value && field.value.map((tag: string) => (
               <Chip key={tag} color="primary" size="sm" variant="flat" onClose={() => removeTag(tag)}>{tag}</Chip>
            ))}
         </div>
      </div>

   )
};
