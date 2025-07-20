import { Flex } from "@styles";
import { CustomButtonIcon } from "@components";
import { IoStarOutline, IoStarSharp } from "@icons";
import { useField } from "formik";

const stars = [1, 2, 3, 4, 5];

export const CustomInputDifficulty = () => {
    const [field, _meta, helpers] = useField('difficulty');
    return (
        <div>
            <h4 className="text-xs mb-2">Dificultad</h4>
            <Flex space="gap-0">
                {stars.map(star => (
                    <CustomButtonIcon key={star} variant="light" color="primary" onPress={() => helpers.setValue(star)}>
                        {star <= field.value ? <IoStarSharp size="1.2em" /> : <IoStarOutline size="1.2em" opacity=".5" />}
                    </CustomButtonIcon>
                ))}
            </Flex>
        </div>
    )
}