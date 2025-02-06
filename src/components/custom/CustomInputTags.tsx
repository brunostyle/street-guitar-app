import { Input } from "@heroui/react";

interface IInputTags {
    label: string;
    value: string;
    onChange: any;
    addTag: any;
    content: React.ReactElement;
}

export const CustomInputTags = ({ label, value, onChange, content, addTag }: IInputTags) => (
    <Input
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