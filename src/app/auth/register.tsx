import { Spacer } from "@heroui/react"
import { Link } from "react-router-dom"
import { Form, Formik } from "formik"
import { CustomButton, CustomInput, LayoutAuth } from "@components"
import { IoMailOutline, IoLockClosedOutline, IoPersonOutline } from "@icons";
import { registerSchema } from "@validations";
import { IRegister } from "@interfaces";
import { useRegister } from "@hooks";
import { Between } from "@styles";

const initial: IRegister = { name: '', email: '', password: '' };

const Register = () => {
  const { mutate: register, isPending } = useRegister();
  const handleSubmit = (data: IRegister) => {
    register(data);
  }

  return (
    <LayoutAuth title="Crea una cuenta">
      <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={registerSchema}>
        <Form className="grid gap-4">
          <CustomInput variant="bordered" name="name" label="Nombre completo" placeholder="nombre" icon={<IoPersonOutline />} />
          <CustomInput variant="bordered" name="email" label="Correo electronico" placeholder="email@gmail.com" icon={<IoMailOutline />} />
          <CustomInput variant="bordered" type="password" name="password" label="Contraseña" placeholder="******" icon={<IoLockClosedOutline />} />
          <CustomButton type="submit" color="primary" isLoading={isPending} startContent={!isPending && <IoMailOutline />}>Crear cuenta</CustomButton>
        </Form>
      </Formik>
      <Spacer y={4} />
      <Between>
        <h4>¿Ya tienes cuenta?</h4>
        <Link to="/auth/login" className="text-purple-600">Inicia sesion</Link>
      </Between>
    </LayoutAuth>
  )
};

export default Register;