import { Avatar, AvatarImage, ButtonGroup, Label, Popover, PopoverContent, PopoverDialog, Separator } from "@heroui/react";
import { CustomButton, CustomButtonIcon } from "@components";
import { Flex, HiddenSubtitle } from "@styles";
import { IoChevronDownOutline } from "@icons";

const validNotes = [
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab",
    "A",
    "Bb",
    "B"
];

interface ITuning {
    tuning: {
        label: string,
        notes: {
            first: number;
            second: number;
            third: number;
            fourth: number;
            fifth: number;
            sixth: number;
        }
    }
}

export const Tuning = ({ tuning }: ITuning) => (
    <Popover>
        <CustomButton variant="outline" className="text-accent">
            <Avatar variant="soft" size="sm">
                <AvatarImage src="/guitar.svg" />
            </Avatar>
            Afinación
            <IoChevronDownOutline className="mx-1" />
        </CustomButton>
        <PopoverContent className="bg-background/80 backdrop-blur-sm shadow-outset">
            <PopoverDialog className="p-2">
                <Flex>
                    <Avatar variant="soft" className="shadow-outset">
                        <AvatarImage src="/guitar.svg" />
                    </Avatar>
                    <Separator orientation="vertical" />
                    <div className="hidden sm:block">
                        <HiddenSubtitle className="text-accent">Afinación</HiddenSubtitle>
                        <Label>{tuning.label}</Label>
                    </div>
                    <Separator className="hidden sm:block" orientation="vertical" />
                    <ButtonGroup>
                        <CustomButtonIcon variant="ghost" className="text-accent shadow-outset">{validNotes[tuning.notes.sixth]}</CustomButtonIcon>
                        <CustomButtonIcon variant="ghost" className="text-accent shadow-outset">{validNotes[tuning.notes.fifth]}</CustomButtonIcon>
                        <CustomButtonIcon variant="ghost" className="text-accent shadow-outset">{validNotes[tuning.notes.fourth]}</CustomButtonIcon>
                        <CustomButtonIcon variant="ghost" className="text-accent shadow-outset">{validNotes[tuning.notes.third]}</CustomButtonIcon>
                        <CustomButtonIcon variant="ghost" className="text-accent shadow-outset">{validNotes[tuning.notes.second]}</CustomButtonIcon>
                        <CustomButtonIcon variant="ghost" className="text-accent shadow-outset">{validNotes[tuning.notes.first]}</CustomButtonIcon>
                    </ButtonGroup>
                </Flex>
            </PopoverDialog>
        </PopoverContent>
    </Popover>
)