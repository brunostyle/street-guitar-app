import { Spacer, Button, DatePicker } from "@heroui/react"
import { useState } from "react";
import { Formik, Form } from "formik"
import { Between } from "@styles"
import { CustomInput } from "@components"
import { IoCardOutline, IoLogoPaypal, IoCloseOutline } from "@icons";
import { paySchema } from "@validations";
const initial = { name: '', number: '', expires: '', csc: '' };

export const ProductPay = () => {
   const [showPay, setShowPay] = useState(false);

   const handleSubmit = (values: any) => {
      console.log(values)
   }

   return (
      <div className="w-full">
         <Button fullWidth size="sm" color="warning" startContent={<IoLogoPaypal />}>
            <h4 className="font-extrabold text-blue-700">Pay</h4><h4 className="font-extrabold text-white">Pal</h4>
         </Button>
         <Spacer y={4} />
         <Button fullWidth size="sm" color="primary" startContent={showPay ? <IoCloseOutline /> : <IoCardOutline />} onPress={() => setShowPay(!showPay)}>
            {showPay ? 'Cancelar' : 'Tarjeta de credito'}
         </Button>
         {showPay &&
            <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={paySchema}>
               <Form className="opacity">
                  <Spacer y={2} />
                  <CustomInput name="name" label="Nombre" />
                  <Spacer y={2} />
                  <CustomInput type="number" name="number" label="Numero tarjeta" />
                  <Spacer y={2} />
                  <Between>
                     <DatePicker granularity="day" size="sm" label="Expiracion" labelPlacement="outside" />
                     <CustomInput type="number" name="csc" label="Nro seguridad" />
                  </Between>
                  <Spacer y={4} />
                  <Button fullWidth size="sm" color="primary" type="submit" startContent={<IoCardOutline />}>Pagar</Button>
               </Form>
            </Formik>
         }
      </div>
   )
}