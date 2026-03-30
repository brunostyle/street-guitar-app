import { Card, CardContent } from "@heroui/react";
import { useParams } from "react-router";
import { Form, Formik } from "formik";
import { Images, CustomInput, Admin, Category, Tags, PDF, CustomButton, CustomInputDifficulty, FullScreenLoading } from "@components";
import { IoTrashOutline, IoSaveOutline, FaSpotify, IoCodeOutline, IoLogoUsd, IoPencil, IoPersonOutline } from "@icons";
import { productSchema } from "@validations";
import { Grid, GridContainer, SectionTitle, Spacer } from "@styles";
import { useDeleteProduct, useGetProduct, useUpdateProduct } from "@hooks";

export const UpdateProduct = () => {
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
            <Spacer />
            {isLoading ? <FullScreenLoading />
                :
                <Card className="shadow-inset"><CardContent>
                    <Formik enableReinitialize initialValues={product} onSubmit={handleSubmit} validationSchema={productSchema}>
                        {form => (
                            <Form><GridContainer>
                                <Grid>
                                    <CustomInput name="title" label="Titulo" placeholder="Titulo del producto" icon={<IoCodeOutline />} />
                                    <CustomInput name="description" label="Artista" placeholder="Nombre del artista" icon={<IoPersonOutline />} />
                                    <CustomInput type="number" name="price" label="Precio" placeholder="0.00" icon={<IoLogoUsd />} />
                                    <CustomInput name="spotify" label="Spotify" placeholder="https://" icon={<FaSpotify />} />
                                    <Tags />
                                </Grid>
                                <Grid>
                                    <Category />
                                    <CustomInputDifficulty />
                                    <PDF />
                                    <Images />
                                    <CustomButton fullWidth variant="outline" isLoading={isDeleting} icon={<IoTrashOutline />} onPress={() => deleteProduct(String(id))}>Eliminar</CustomButton>
                                    <CustomButton fullWidth variant="outline" isLoading={isUpdating} icon={<IoSaveOutline />} onPress={() => form.handleSubmit()}>Actualizar</CustomButton>
                                </Grid>
                            </GridContainer></Form>
                        )}
                    </Formik>
                </CardContent></Card>
            }
        </Admin>
    )
};