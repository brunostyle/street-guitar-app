import { Card, CardBody, Spacer } from "@heroui/react";
import { Form, Formik } from "formik";
import { Images, CustomInput, Admin, Category, Tags, CustomTextarea, PDF, CustomButton } from "@components";
import { AiOutlineSave, FaPlus, AiOutlineSpotify, MdOutlineSubtitles, MdOutlineAttachMoney } from "@icons";
import { productSchema } from "@validations";
import { Grid, GridContainer, SectionTitle } from "@styles";
import { useAddProduct } from "@hooks";
const initial = { title: '', description: '', price: '', spotify: '', tab: '', pdf: '', category: 'rock', tags: [], images: [] }

const NewProduct = () => {
    const { addProduct, isAdding } = useAddProduct();

    const handleSubmit = (values: any) => {
        addProduct({ ...values })
    };

    return (
        <Admin isProductPage title="Agregar" icon={<FaPlus />}>
            <SectionTitle>Agregar un producto</SectionTitle>
            <Spacer y={4} />
            <Card><CardBody>
                <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={productSchema}>
                    {form => (
                        <Form><GridContainer>
                            <Grid>
                                <CustomInput name="title" label="Titulo" placeholder="Titulo del producto" icon={<MdOutlineSubtitles />} />
                                <CustomTextarea name="description" label="Descripción" placeholder="Descripcion del producto" />
                                <CustomInput type="number" name="price" label="Precio" placeholder="0.00" icon={<MdOutlineAttachMoney />} />
                                <CustomInput name="spotify" label="Spotify" placeholder="https://" icon={<AiOutlineSpotify />} />
                                <Tags />
                            </Grid>
                            <Grid>
                                <Category />
                                <PDF />
                                <Images />
                                <CustomButton variant="bordered" isLoading={isAdding} startContent={!isAdding && <AiOutlineSave />} onPress={() => form.handleSubmit()}>Guardar</CustomButton>
                            </Grid>
                        </GridContainer></Form>
                    )}
                </Formik>
            </CardBody></Card>
        </Admin>
    )
};

export default NewProduct;