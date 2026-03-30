import { Tag, TagGroup, TagGroupList, type Key } from "@heroui/react";
import { useState } from "react";
import { useField } from "formik";
import { CustomInputTags } from "@components";
import { IoPricetagsOutline, IoAddOutline } from "@icons";
import { Gap } from "@styles";

export const Tags = () => {
   const [field, _meta, helpers] = useField('tags');
   const [tagValue, setTagValue] = useState<string>('');

   const removeTag = (keys: Set<Key>) => {
      helpers.setValue(field.value.filter((tag: string) => !keys.has(tag)))
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
         <CustomInputTags label="Etiquetas" value={tagValue} onChange={setTagValue} addTag={addTag} icon={<IoAddOutline />} />
         <TagGroup aria-label="Tags" onRemove={removeTag} size="sm">
            <TagGroupList>
               {field.value && field.value.map((tag: string) => (
                  <Tag key={tag} id={tag} textValue={tag}>
                     <IoPricetagsOutline />
                     <span>{tag}</span>
                  </Tag>
               ))}
            </TagGroupList>
         </TagGroup>
      </Gap>
   )
};