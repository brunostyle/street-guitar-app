import { Card, CardBody, Button, Spacer, Skeleton } from "@heroui/react";
import { useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import { Images, Input, Admin, Category, Tags, Textarea, PDF } from "@components";
import { AiFillDelete, AiOutlineSave, BiPencil, AiOutlineSpotify, MdOutlineSubtitles, MdOutlineAttachMoney } from "@icons";
import { productSchema } from "@validations";
import { Grid, GridContainer, SectionTitle } from "@styles";
import { useDeleteProduct, useGetProduct, useUpdateProduct } from "@hooks";

const UpdateProduct = () => {
    const { id } = useParams();
    const { product, isLoading } = useGetProduct(String(id));
    const { updateProduct, isUpdating } = useUpdateProduct();
    const { deleteProduct, isDeleting } = useDeleteProduct();

    const handleSubmit = (values: any) => updateProduct({ ...values, id })

    return (
        <Admin isProductPage title="Actualizar" icon={<BiPencil />}>
            <SectionTitle>Actualizar un producto</SectionTitle>
            <Spacer y={4} />
            <Card><CardBody>
                <Formik enableReinitialize initialValues={product} onSubmit={handleSubmit} validationSchema={productSchema}>
                    {form => (
                        <Form><GridContainer>
                            <Grid>
                                <Skeleton isLoaded={!isLoading}>
                                <Input name="title" label="Titulo" placeholder="Titulo del producto" icon={<MdOutlineSubtitles />} />
                                </Skeleton>
                                <Skeleton isLoaded={!isLoading}>
                                <Textarea name="description" label="Descripción" placeholder="Descripcion del producto" />
                                </Skeleton>
                                <Skeleton isLoaded={!isLoading}>
                                    <Input type="number" name="price" label="Precio" placeholder="0.00" icon={<MdOutlineAttachMoney />} />
                                </Skeleton>
                                <Skeleton isLoaded={!isLoading}>
                                <Input name="spotify" label="Spotify" placeholder="https://" icon={<AiOutlineSpotify />} />
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
                                    <PDF />
                                </Skeleton>
                                <Images />
                                <Button fullWidth variant="bordered" size="sm" isLoading={isDeleting} startContent={!isDeleting && <AiFillDelete />} onPress={() => deleteProduct(String(id))}>Eliminar</Button>
                                <Button fullWidth variant="bordered" size="sm" isLoading={isUpdating} startContent={!isUpdating && <AiOutlineSave />} onPress={() => form.handleSubmit()}>Actualizar</Button>
                            </Grid>
                        </GridContainer></Form>
                    )}
                </Formik>
            </CardBody></Card>
        </Admin>
    )
};

export default UpdateProduct;