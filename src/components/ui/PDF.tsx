import { Card, CardContent, CardFooter, CardHeader, Label, ProgressBar, ProgressBarFill, ProgressBarTrack } from "@heroui/react";
import type { ChangeEvent } from "react";
import { useParams } from "react-router";
import { useField } from "formik";
import { IoCloseOutline, IoDocumentTextOutline, IoEyeOutline } from "@icons";
import { Between, Flex, Gap, TitlePDF } from "@styles";
import { useAddPDF, useDeletePDF } from "@hooks";
import { CustomButtonIcon, CustomButtonLink, FileInput, notify } from "@components";
import { fetcherWithToken } from "@fetch";

export const PDF = () => {
    const { id } = useParams();
    const { addPDF, isAdding } = useAddPDF(id!);
    const { deletePDF, isDeleting } = useDeletePDF();
    const [fieldPDF, _metaPDF, helpersPDF] = useField('pdf');
    const [fieldTAB, _metaTAB, helpersTAB] = useField('tab');

    const handleDelete = () => {
        deletePDF({ url: fieldPDF.value }, {
            onSuccess: async () => {
                helpersPDF.setValue('');
                helpersTAB.setValue('');
                if (id) {
                    await fetcherWithToken({ endpoint: '/products/' + id, method: 'PUT', data: { pdf: '', tab: '' } });
                }
            }
        });
    }

    const handlePDF = (e: ChangeEvent<HTMLInputElement>) => {
        const [file] = e.target.files!;
        const extension = file.name.split('.').pop();
        if (extension !== 'pdf') return notify.error('Extension no valida')
        helpersTAB.setValue(file.name);
        addPDF({ file }, {
            onSuccess: async (url) => {
                helpersPDF.setValue(url)
                if (id) {
                    await fetcherWithToken({ endpoint: '/products/' + id, method: 'PUT', data: { pdf: url, tab: file.name } });
                }
            }
        });
    };

    return (
        <Gap>
            <Label>Tablatura</Label>
            {fieldTAB.value &&
                <Card className="px-4 py-2 shadow-outset">
                    <Between>
                        <CardHeader>
                            <IoDocumentTextOutline size="1.5rem" className="text-accent" />
                        </CardHeader>
                        <CardContent>
                            <TitlePDF>{fieldTAB.value}</TitlePDF>
                            {(isAdding || isDeleting) &&
                                <ProgressBar size="sm" className="mt-4" isIndeterminate>
                                    <ProgressBarTrack>
                                        <ProgressBarFill />
                                    </ProgressBarTrack>
                                </ProgressBar>}
                        </CardContent>
                        <CardFooter>
                            <Flex space="gap-2">
                                <CustomButtonLink to={fieldPDF.value}><IoEyeOutline /></CustomButtonLink>
                                <CustomButtonIcon onPress={handleDelete}><IoCloseOutline /></CustomButtonIcon>
                            </Flex>
                        </CardFooter>
                    </Between>
                </Card>
            }
            <FileInput id="pdf" label="Cargar PDF" onChange={handlePDF} />
        </Gap>
    )
}