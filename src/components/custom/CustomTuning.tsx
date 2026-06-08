import { Avatar, AvatarImage, ButtonGroup, Card, CardFooter, CardHeader, Description, Dropdown, DropdownItem, DropdownItemIndicator, DropdownMenu, DropdownPopover, Label, Separator, type Selection } from "@heroui/react"
import { Between, Flex, HiddenSubtitle } from "@styles"
import { CustomButtonIcon } from "./CustomButtonIcon"
import { IoOptionsOutline } from "@icons"
import { useState } from "react"
import { useField } from "formik"

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
    first: number;
    second: number;
    third: number;
    fourth: number;
    fifth: number;
    sixth: number;
}

const standard = {
    first: 4,
    second: 11,
    third: 7,
    fourth: 2,
    fifth: 9,
    sixth: 4
}

const halfStepDown = {
    first: 3,
    second: 10,
    third: 6,
    fourth: 1,
    fifth: 8,
    sixth: 3
}

const dropD = {
    first: 2,
    second: 9,
    third: 5,
    fourth: 0,
    fifth: 7,
    sixth: 2
}

export const CustomTuning = () => {
    const [field, _meta, helpers] = useField('tuning');
    const [selected, setSelected] = useState<Selection>(new Set([field.value.label]));

    const handleTuning = (label: string, tuning: ITuning) => {
        helpers.setValue({
            label,
            notes: {
                first: tuning.first,
                second: tuning.second,
                third: tuning.third,
                fourth: tuning.fourth,
                fifth: tuning.fifth,
                sixth: tuning.sixth,
            }
        })
    }

    return (
        <div>
            <Label>Afinación</Label>
            <Card className="p-2 shadow-outset">
                <Between>
                    <CardHeader>
                        <Flex>
                            <Avatar variant="soft" className="shadow-outset">
                                <AvatarImage src="/guitar.svg" />
                            </Avatar>
                            <Separator orientation="vertical" />
                            <div>
                                <HiddenSubtitle className="text-accent">Afinación</HiddenSubtitle>
                                <Label>{field.value.label}</Label>
                            </div>
                        </Flex>
                    </CardHeader>
                    <CardFooter>
                        <Flex>
                            <ButtonGroup className="hidden sm:block">
                                <CustomButtonIcon variant="ghost" className="text-accent shadow-outset">{validNotes[field.value.notes.sixth]}</CustomButtonIcon>
                                <CustomButtonIcon variant="ghost" className="text-accent shadow-outset">{validNotes[field.value.notes.fifth]}</CustomButtonIcon>
                                <CustomButtonIcon variant="ghost" className="text-accent shadow-outset">{validNotes[field.value.notes.fourth]}</CustomButtonIcon>
                                <CustomButtonIcon variant="ghost" className="text-accent shadow-outset">{validNotes[field.value.notes.third]}</CustomButtonIcon>
                                <CustomButtonIcon variant="ghost" className="text-accent shadow-outset">{validNotes[field.value.notes.second]}</CustomButtonIcon>
                                <CustomButtonIcon variant="ghost" className="text-accent shadow-outset">{validNotes[field.value.notes.first]}</CustomButtonIcon>
                            </ButtonGroup>
                            <Separator orientation="vertical" />
                            <Dropdown>
                                <CustomButtonIcon><IoOptionsOutline /></CustomButtonIcon>
                                <DropdownPopover className="min-w-fit">
                                    <DropdownMenu selectedKeys={selected} selectionMode="single" onSelectionChange={setSelected}>
                                        <TuningItem label="Standard" tuning={standard} handleTuning={handleTuning} />
                                        <Separator />
                                        <TuningItem label="Medio tono abajo" tuning={halfStepDown} handleTuning={handleTuning} />
                                        <Separator />
                                        <TuningItem label="Tono abajo" tuning={dropD} handleTuning={handleTuning} />
                                    </DropdownMenu>
                                </DropdownPopover>
                            </Dropdown>
                        </Flex>
                    </CardFooter>
                </Between>
            </Card>
        </div>
    )
}

interface ITuningItem {
    label: string;
    tuning: ITuning;
    handleTuning: (label: string, tuning: ITuning) => void;
}

export const TuningItem = ({ label, tuning, handleTuning }: ITuningItem) => (
    <DropdownItem id={label} onClick={() => handleTuning(label, tuning)}>
        <Between>
            <Label>{label}</Label>
            <Flex>
                <Description className="text-accent">{validNotes[tuning.sixth]}</Description>
                <Description className="text-accent">{validNotes[tuning.fifth]}</Description>
                <Description className="text-accent">{validNotes[tuning.fourth]}</Description>
                <Description className="text-accent">{validNotes[tuning.third]}</Description>
                <Description className="text-accent">{validNotes[tuning.second]}</Description>
                <Description className="text-accent">{validNotes[tuning.first]}</Description>
            </Flex>
        </Between>
        <DropdownItemIndicator />
    </DropdownItem>
)