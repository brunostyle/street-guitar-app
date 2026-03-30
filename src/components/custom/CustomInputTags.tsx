import { InputGroup, InputGroupInput, InputGroupPrefix, InputGroupSuffix, Label, TextField } from "@heroui/react";
import { IoPricetagsOutline } from "@icons";

interface IInputTags {
    label: string;
    value: string;
    onChange: any;
    addTag: any;
    icon: React.ReactElement;
}

export const CustomInputTags = ({ label, value, onChange, icon, addTag }: IInputTags) => (
    <TextField aria-label="input">
        <Label>{label}</Label>
        <InputGroup>
            <InputGroupPrefix><IoPricetagsOutline /></InputGroupPrefix>
            <InputGroupInput autoComplete="off" className="ml-2" placeholder="Ingresa una etiqueta" value={value} onChange={(e) => onChange(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addTag()} />
            <InputGroupSuffix className="cursor-pointer" onClick={addTag}>{icon}</InputGroupSuffix>
        </InputGroup>
    </TextField>
)