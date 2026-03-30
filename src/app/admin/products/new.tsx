import { Card, CardContent } from "@heroui/react";
import { Form, Formik } from "formik";
import { Images, CustomInput, Admin, Category, Tags, PDF, CustomButton, CustomInputDifficulty } from "@components";
import { IoSaveOutline, FaSpotify, IoCodeOutline, IoLogoUsd, IoAddOutline, IoPersonOutline } from "@icons";
import { productSchema } from "@validations";
import { Grid, GridContainer, SectionTitle, Spacer } from "@styles";
import { useAddProduct } from "@hooks";
const initial = { title: '', description: '', price: '', spotify: '', tab: '', pdf: '', difficulty: 1, category: 'rock', tags: [], images: [] }

export const NewProduct = () => {
    const { addProduct, isAdding } = useAddProduct();

    const handleSubmit = (values: any) => {        
        addProduct({ ...values })
    };

    return (
        <Admin show="extra-breadcrumb" title="Agregar" icon={<IoAddOutline />}>
            <SectionTitle>Agregar un producto</SectionTitle>
            <Spacer />
            <Card className="shadow-inset"><CardContent>
                <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={productSchema}>
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
                                <CustomButton fullWidth variant="outline" isLoading={isAdding} icon={<IoSaveOutline />} onPress={() => form.handleSubmit()}>Guardar</CustomButton>
                            </Grid>
                        </GridContainer></Form>
                    )}
                </Formik>
            </CardContent></Card>
        </Admin>
    )
};