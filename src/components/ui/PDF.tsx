import { Card, CardBody, Progress } from "@heroui/react";
import type { ChangeEvent } from "react";
import { Link, useParams } from "react-router";
import { useField } from "formik";
import { IoCloseOutline, IoDocumentTextOutline } from "@icons";
import { Between, Gap, TitlePDF } from "@styles";
import { useAddPDF, useDeletePDF } from "@hooks";
import { CustomButtonIcon, File, notify } from "@components";
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
            {fieldTAB.value &&
                <Card className="px-2">
                    <Between>
                        <IoDocumentTextOutline size="2rem" className="text-primary" />
                        <CardBody>
                            <Link to={fieldPDF.value} target="_blank"><TitlePDF>{fieldTAB.value}</TitlePDF></Link>
                            {(isAdding || isDeleting) && <Progress size="sm" className="mt-4" isIndeterminate />}
                        </CardBody>
                        <CustomButtonIcon variant="light" onPress={handleDelete}><IoCloseOutline /></CustomButtonIcon>
                    </Between>
                </Card>
            }
            <File id="pdf" label="Cargar PDF" onChange={handlePDF} />
        </Gap>
    )
}