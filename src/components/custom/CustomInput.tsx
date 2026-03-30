import { FieldError, InputGroup, InputGroupInput, InputGroupPrefix, Label, TextField } from "@heroui/react";
import { useField } from "formik";
import type { JSX } from "react";

interface IInput {
   name: string;
   label?: string;
   placeholder?: string;
   icon?: JSX.Element;
   type?: 'text' | 'number';
   isDisabled?: boolean;
}

export const CustomInput = ({ name, label, icon, type = 'text', isDisabled = false, placeholder }: IInput) => {
   const [field, meta] = useField(name);
   return (
      <TextField aria-label="input" fullWidth name={name} isInvalid={!!meta.error && meta.touched} isDisabled={isDisabled}>
         {label && <Label>{label}</Label>}
         <InputGroup>
            <InputGroupPrefix>{icon}</InputGroupPrefix>
            <InputGroupInput {...field} autoComplete="off" type={type} placeholder={placeholder} className="ml-2" />
         </InputGroup>
         <FieldError>{meta.error}</FieldError>
      </TextField>
   )
}