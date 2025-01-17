import { Card, Button, CardBody, Progress } from "@heroui/react";
import { ChangeEvent } from "react";
import { Link, useParams } from "react-router-dom";
import { useField } from "formik";
import { MdClose, IoDocumentText } from "@icons";
import { TitlePDF } from "@styles";
import { useAddPDF, useDeletePDF } from "@hooks";
import { File, notify } from "@components";
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
        <div>
            {fieldTAB.value &&
                <Card className="flex flex-row items-center mb-4 px-2">
                    <IoDocumentText size="2rem" className="text-primary mx-2" />
                    <CardBody>
                        <Link to={fieldPDF.value} target="_blank"><TitlePDF>{fieldTAB.value}</TitlePDF></Link>
                        {(isAdding || isDeleting) && <Progress size="sm" className="mt-4" isIndeterminate />}
                    </CardBody>
                    <Button isIconOnly variant="light" size="sm" onPress={handleDelete}><MdClose /></Button>
                </Card>
            }
            <File id="pdf" label="Cargar PDF" onChange={handlePDF} />
        </div>
    )
}