import { FieldError, InputGroup, InputGroupInput, InputGroupPrefix, InputGroupSuffix, Label, TextField } from "@heroui/react";
import { IoEyeOffOutline, IoEyeOutline } from "@icons";
import { useField } from "formik";
import type { JSX } from "react";

interface IInput {
    name: string;
    label: string;
    icon?: JSX.Element;
    isDisabled?: boolean;
    placeholder?: string;
    isVisible: boolean;
    setIsVisible: (value: boolean) => void;
}

export const CustomInputPassword = ({ name, label, icon, isDisabled = false, placeholder, isVisible, setIsVisible }: IInput) => {
    const [field, meta] = useField(name);
    return (
        <TextField aria-label="input" fullWidth name={name} isInvalid={!!meta.error && meta.touched} isDisabled={isDisabled}>
            {label && <Label>{label}</Label>}
            <InputGroup>
                <InputGroupPrefix>{icon}</InputGroupPrefix>
                <InputGroupInput {...field} autoComplete="off" className="ml-2" type={isVisible ? 'text' : 'password'} placeholder={placeholder} />
                <InputGroupSuffix className="cursor-pointer" onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </InputGroupSuffix>
            </InputGroup>
            <FieldError>{meta.error}</FieldError>
        </TextField>
    )
}