import { Flex } from "@styles";
import { CustomButtonIcon } from "@components";
import { IoStarOutline, IoStarSharp } from "@icons";

interface IProps {
    difficulty: number;
}

const stars = [1, 2, 3, 4, 5];

export const Difficulty = ({ difficulty }: IProps) => (
    <Flex space="gap-0">
        {stars.map(star => (
            <CustomButtonIcon key={star} variant="light" color="primary" className="pointer-events-none">
                {star <= difficulty ? <IoStarSharp size="1.2em" /> : <IoStarOutline size="1.2em" opacity=".5" />}
            </CustomButtonIcon>
        ))}
    </Flex>
)