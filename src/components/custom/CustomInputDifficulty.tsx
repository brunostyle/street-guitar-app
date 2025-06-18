import { Flex } from "@styles";
import { CustomButtonIcon } from "@components";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import { useField } from "formik";

export const CustomInputDifficulty = () => {
    const [field, _meta, helpers] = useField('difficulty');
    const stars = [1, 2, 3, 4, 5];

    return (
        <div>
            <h4 className="text-xs mb-2">Dificultad</h4>
            <Flex space="gap-0">
                {stars.map(star => star <= field.value
                    ? <CustomButtonIcon key={star} variant="light" color="primary" onPress={() => helpers.setValue(star)}><IoStarSharp size="1.2em" /></CustomButtonIcon>
                    : <CustomButtonIcon key={star} variant="light" color="primary" onPress={() => helpers.setValue(star)}><IoStarOutline size="1.2em" opacity=".5" /></CustomButtonIcon>
                )}
            </Flex>
        </div>
    )
}