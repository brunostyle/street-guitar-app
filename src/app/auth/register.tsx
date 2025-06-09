import { Form, Formik } from "formik"
import { CustomButton, CustomInput, CustomInputPassword } from "@components"
import { IoMailOutline, IoLockClosedOutline, IoPersonOutline } from "@icons";
import { registerSchema } from "@validations";
import { IRegister } from "@interfaces";
import { useRegister } from "@hooks";
import { useState } from "react";

const initial: IRegister = { name: '', email: '', password: '' };

const Register = () => {
  const { mutate: register, isPending } = useRegister();
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (data: IRegister) => {
    register(data);
  }

  return (
    <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={registerSchema}>
      <Form className="grid gap-4">
        <CustomInput variant="bordered" name="name" label="Nombre completo" placeholder="nombre" icon={<IoPersonOutline />} />
        <CustomInput variant="bordered" name="email" label="Correo electronico" placeholder="email@gmail.com" icon={<IoMailOutline />} />
        <CustomInputPassword variant="bordered" name="password" label="Contraseña" placeholder="******" icon={<IoLockClosedOutline />} isVisible={isVisible} setIsVisible={setIsVisible} />
        <CustomButton type="submit" color="primary" isLoading={isPending} startContent={!isPending && <IoMailOutline />}>Crear cuenta</CustomButton>
      </Form>
    </Formik>

  )
};

export default Register;