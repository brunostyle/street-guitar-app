import { Input } from "@heroui/react";
import { Field } from "formik";
import type { JSX } from "react";

interface IInput {
    name: string;
    label: string;
    icon?: JSX.Element;
}

export const CustomInputBordered = ({ name, label, icon }: IInput) => (
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
        as={Input}
    />
)