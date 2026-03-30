import { CustomButtonIcon } from "@components";
import { IoStarOutline, IoStarSharp } from "@icons";
import { ButtonGroup } from "@heroui/react";

interface IProps {
    difficulty: number;
}

const stars = [1, 2, 3, 4, 5];

export const Difficulty = ({ difficulty }: IProps) => (
    <ButtonGroup>
        {stars.map(star => (
            <CustomButtonIcon key={star} variant="ghost" className="text-accent pointer-events-none">
                {star <= difficulty ? <IoStarSharp /> : <IoStarOutline opacity=".5" />}
            </CustomButtonIcon>
        ))}
    </ButtonGroup>
)