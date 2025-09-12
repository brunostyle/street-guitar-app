import { Input } from "@heroui/react";
import { IoEyeOffOutline, IoEyeOutline } from "@icons";
import { ErrorMessage, Field, useField } from "formik";
import type { JSX } from "react";

interface IInput {
    name: string;
    label: string;
    icon?: JSX.Element;
    isDisabled?: boolean;
    placeholder?: string;
    variant?: 'flat' | 'bordered' | 'underlined' | 'faded';
    isVisible: boolean;
    setIsVisible: (value: boolean) => void;
}

export const CustomInputPassword = ({ name, label, icon, isDisabled = false, placeholder, variant = 'flat', isVisible, setIsVisible }: IInput) => {
    const [_field, meta] = useField(name);
    const toggleVisibility = () => setIsVisible(!isVisible);
    return (
        <Field
            aria-label="input"
            type={isVisible ? 'text' : 'password'}
            name={name}
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
            endContent={
                <button type="button" className="focus:outline-none text-gray-500" onClick={toggleVisibility}>
                    {isVisible ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
            }
            as={Input}
        />
    )
}