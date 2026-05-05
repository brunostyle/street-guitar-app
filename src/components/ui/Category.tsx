import { CATEGORIES } from "@categories";
import { RadioGroup, Radio, RadioControl, RadioIndicator, RadioContent, Label, Description } from "@heroui/react";
import { useField } from "formik";

export const Category = () => {
   const [field, _meta, helpers] = useField('category');
   return (
      <div>
         <Label>Categoria</Label>
         <RadioGroup
            aria-label="categoria"
            orientation="horizontal"
            defaultValue="rock"
            value={field.value}
            onChange={helpers.setValue}
         >
            {CATEGORIES.map(category => (
               <Radio key={category.key} value={category.key}>
                  <RadioControl>
                     <RadioIndicator />
                  </RadioControl>
                  <RadioContent>
                     <Description>{category.value}</Description>
                  </RadioContent>
               </Radio>
            ))}
         </RadioGroup>
      </div>
   );
}