import { Flex } from "@styles";
import { CustomButtonIcon } from "@components";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";

interface IProps {
    difficulty: number;
}

export const Difficulty = ({ difficulty }: IProps) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <Flex space="gap-0">
            {stars.map(star => star <= difficulty
                ? <CustomButtonIcon key={star} variant="light" color="primary"><IoStarSharp size="1.2em" /></CustomButtonIcon>
                : <CustomButtonIcon key={star} variant="light" color="primary"><IoStarOutline size="1.2em" opacity=".5" /></CustomButtonIcon>
            )}
        </Flex>
    )
}