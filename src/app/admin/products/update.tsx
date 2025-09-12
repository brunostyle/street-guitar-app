import { Card, CardBody, Spacer, Skeleton } from "@heroui/react";
import { useParams } from "react-router";
import { Form, Formik } from "formik";
import { Images, CustomInput, Admin, Category, Tags, CustomTextarea, PDF, CustomButton, CustomInputDifficulty } from "@components";
import { IoTrashOutline, IoSaveOutline, FaSpotify, IoCodeOutline, IoLogoUsd, IoPencil } from "@icons";
import { productSchema } from "@validations";
import { Grid, GridContainer, SectionTitle } from "@styles";
import { useDeleteProduct, useGetProduct, useUpdateProduct } from "@hooks";

const UpdateProduct = () => {
    const { id } = useParams();
    const { product, isLoading } = useGetProduct(String(id));
    const { updateProduct, isUpdating } = useUpdateProduct();
    const { deleteProduct, isDeleting } = useDeleteProduct();

    const handleSubmit = (values: any) => {
        updateProduct({ ...values, id })
    }

    return (
        <Admin show="extra-breadcrumb" title="Actualizar" icon={<IoPencil />}>
            <SectionTitle>Actualizar un producto</SectionTitle>
            <Spacer y={4} />
            <Card className="shadow-inset"><CardBody>
                <Formik enableReinitialize initialValues={product} onSubmit={handleSubmit} validationSchema={productSchema}>
                    {form => (
                        <Form><GridContainer>
                            <Grid>
                                <Skeleton isLoaded={!isLoading}>
                                    <CustomInput name="title" label="Titulo" placeholder="Titulo del producto" icon={<IoCodeOutline />} />
                                </Skeleton>
                                <Skeleton isLoaded={!isLoading}>
                                    <CustomTextarea name="description" label="Descripción" placeholder="Descripcion del producto" />
                                </Skeleton>
                                <Skeleton isLoaded={!isLoading}>
                                    <CustomInput type="number" name="price" label="Precio" placeholder="0.00" icon={<IoLogoUsd />} />
                                </Skeleton>
                                <Skeleton isLoaded={!isLoading}>
                                    <CustomInput name="spotify" label="Spotify" placeholder="https://" icon={<FaSpotify />} />
                                </Skeleton>
                                <Skeleton isLoaded={!isLoading}>
                                    <Tags />
                                </Skeleton>
                            </Grid>
                            <Grid>
                                <Skeleton isLoaded={!isLoading}>
                                    <Category />
                                </Skeleton>
                                <Skeleton isLoaded={!isLoading}>
                                    <CustomInputDifficulty />
                                </Skeleton>
                                <Skeleton isLoaded={!isLoading}>
                                    <PDF />
                                </Skeleton>
                                <Images />
                                <CustomButton variant="bordered" isLoading={isDeleting} startContent={<IoTrashOutline />} onPress={() => deleteProduct(String(id))}>Eliminar</CustomButton>
                                <CustomButton variant="bordered" isLoading={isUpdating} startContent={<IoSaveOutline />} onPress={() => form.handleSubmit()}>Actualizar</CustomButton>
                            </Grid>
                        </GridContainer></Form>
                    )}
                </Formik>
            </CardBody></Card>
        </Admin>
    )
};

export default UpdateProduct;