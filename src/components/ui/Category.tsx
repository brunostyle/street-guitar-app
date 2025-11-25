import { CATEGORIES } from "@categories";
import { RadioGroup, Radio as RadioNext } from "@heroui/react";
import { ErrorMessage, useField } from "formik";

export const Category = () => {
   const [field, _meta, helpers] = useField('category');
   return (
      <div>
         <h4 className="text-xs mb-2">Categoria</h4>
         <RadioGroup 
            aria-label="categoria" 
            size="sm" 
            orientation="horizontal" 
            defaultValue="rock" 
            value={field.value}
            onValueChange={helpers.setValue}
            errorMessage={<ErrorMessage name={field.name} />}
         >
            {CATEGORIES.map(category => (
               <RadioNext value={category.key}>{category.value}</RadioNext>
            ))}
         </RadioGroup>
      </div>
   );
}