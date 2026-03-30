import { CustomButtonIcon } from "@components";
import { IoStarOutline, IoStarSharp } from "@icons";
import { useField } from "formik";
import { ButtonGroup, Label } from "@heroui/react";

const stars = [1, 2, 3, 4, 5];

export const CustomInputDifficulty = () => {
    const [field, _meta, helpers] = useField('difficulty');
    return (
        <div>
            <Label>Dificultad</Label>
            <br />
            <ButtonGroup>
                {stars.map(star => (
                    <CustomButtonIcon key={star} variant="ghost" onPress={() => helpers.setValue(star)} className="text-accent">
                        {star <= field.value ? <IoStarSharp /> : <IoStarOutline opacity=".5" />}
                    </CustomButtonIcon>
                ))}
            </ButtonGroup>
        </div>
    )
}