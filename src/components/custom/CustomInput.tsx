import { Input } from "@heroui/react";
import { ErrorMessage, Field, useField } from "formik";
import type { JSX } from "react";

interface IInput {
   name: string;
   label: string;
   icon?: JSX.Element;
   type?: 'text' | 'number';
   isDisabled?: boolean;
   placeholder?: string;
   variant?: 'flat' | 'bordered' | 'underlined' | 'faded';
}

export const CustomInput = ({ name, label, icon, type = 'text', isDisabled = false, placeholder, variant = 'flat' }: IInput) => {
   const [_field, meta] = useField(name);
   return (
      <Field
         aria-label="input"
         name={name}
         type={type}
         isDisabled={isDisabled}
         variant={variant}
         label={label}
         labelPlacement="outside"
         placeholder={placeholder}
         autoComplete="off"
         size="sm"
         fullWidth
         isInvalid={!!meta.error && meta.touched}
         errorMessage={<ErrorMessage name={name} />}
         startContent={<span className="text-gray-500 text-small">{icon}</span>}
         as={Input}
      />
   )
}