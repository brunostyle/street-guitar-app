import { Card, Button, CardBody, Progress } from "@nextui-org/react";
import { ChangeEvent } from "react";
import { Link, useParams } from "react-router-dom";
import { useField } from "formik";
import { MdClose, IoDocumentText } from "@icons";
import { TitlePDF } from "@styles";
import { useAddFile, useDeleteFile } from "@hooks";
import { File } from "@components";
import { fetcherWithToken } from "@fetch";

export const PDF = () => {
    const { id } = useParams();
    const { addFile, isAdding } = useAddFile();
    const { deleteFile, isDeleting } = useDeleteFile();
    const [fieldPDF, _metaPDF, helpersPDF] = useField('pdf');
    const [fieldTAB, _metaTAB, helpersTAB] = useField('tab');

    const handleDelete = () => {
        deleteFile({ url: fieldPDF.value, type: 'file' }, {
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
        addFile({ file, type: 'file' }, {
            onSuccess: async (url) => {
                helpersTAB.setValue(file.name);
                helpersPDF.setValue(url)
                if (id) {
                    await fetcherWithToken({ endpoint: '/products/' + id, method: 'PUT', data: { pdf: url, tab: file.name } });
                }
            },
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
            <File label="Cargar PDF" onChange={handlePDF} />
        </div>
    )
}