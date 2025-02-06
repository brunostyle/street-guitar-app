import { Input } from "@heroui/react";
import { ErrorMessage, Field, useField } from "formik";

interface IInput {
   name: string;
   label: string;
   icon?: JSX.Element;
   type?: 'text' | 'password' | 'number';
   isDisabled?: boolean;
   placeholder?: string;
   variant?: 'default' | 'bordered';
}

export const CustomInput = ({ name, label, icon, type = 'text', isDisabled = false, placeholder, variant = 'default' }: IInput) => {
   const [_field, meta] = useField(name);
   return (
      <Field
         aria-label="input"
         name={name}
         type={type}
         isDisabled={isDisabled}
         variant={variant}
         labelPlacement="outside"
         placeholder={placeholder}
         label={label}
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