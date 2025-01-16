import { Input as NextInput } from "@nextui-org/react";
import { ErrorMessage, Field, useField } from "formik";
import React from "react";

interface IInput {
   name: string;
   label: string;
   icon?: JSX.Element;
   type?: 'text' | 'password' | 'number';
   isDisabled?: boolean;
   placeholder?: string;
   variant?: 'default' | 'bordered';
}

export const Input = ({ name, label, icon, type = 'text', isDisabled = false, placeholder, variant = 'default' }: IInput) => {
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
         as={NextInput}
      />
   )
}

export const InputBordered = ({ name, label, icon }: IInput) => (
   <Field
      aria-label="input"
      name={name}
      placeholder={label}
      color="primary"
      autoComplete="off"
      size="sm"
      variant="bordered"
      isClearable
      fullWidth
      startContent={<span className="text-gray-500 text-small">{icon}</span>}
      as={NextInput}
   />
)

interface IInputTags {
   label: string;
   value: string;
   onChange: any;
   addTag: any;
   content: React.ReactElement;
}

export const InputTags = ({ label, value, onChange, content, addTag }: IInputTags) => (
   <NextInput
      aria-label="input"
      labelPlacement="outside"
      label={label}
      startContent={content}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && addTag()}
      placeholder="Ingresa una etiqueta"
      autoComplete="off"
      size="sm"
      fullWidth
   />
)