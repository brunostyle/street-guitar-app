import { Card, CardBody, Button, Spacer } from "@nextui-org/react";
import { Form, Formik } from "formik";
import { Images, Input, Admin, Category, Tags, Textarea, PDF } from "@components";
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
                                <Input name="title" label="Titulo" placeholder="Titulo del producto" icon={<MdOutlineSubtitles />} />
                                <Textarea name="description" label="Descripción" placeholder="Descripcion del producto" />
                                <Input type="number" name="price" label="Precio" placeholder="0.00" icon={<MdOutlineAttachMoney />} />
                                <Input name="spotify" label="Spotify" placeholder="https://" icon={<AiOutlineSpotify />} />
                                <Tags />
                            </Grid>
                            <Grid>
                                <Category />
                                <PDF />
                                <Images />
                                <Button variant="bordered" fullWidth isLoading={isAdding} startContent={!isAdding && <AiOutlineSave />} size="sm" onPress={() => form.handleSubmit()}>Guardar</Button>
                            </Grid>
                        </GridContainer></Form>
                    )}
                </Formik>
            </CardBody></Card>
        </Admin>
    )
};

export default NewProduct;