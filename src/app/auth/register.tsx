import { Spacer, Button } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { Form, Formik } from "formik"
import { Input, LayoutAuth } from "@components"
import { AiOutlineMail, MdLockOutline, FiUsers } from "@icons";
import { registerSchema } from "@validations";
import { IRegister } from "@interfaces";
import { useRegister } from "@hooks";

const initial: IRegister = { name: '', email: '', password: '' };

const Register = () => {
  const { mutate: register, isPending } = useRegister();
  const handleSubmit = (data: IRegister) => {
    register(data);
  }

  return (
    <LayoutAuth title="Crea una cuenta" description="o inicia sesión">
      <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={registerSchema}>
        <Form className="grid gap-4">
          <Input variant="bordered" name="name" label="Nombre completo" icon={<FiUsers />} />
          <Input variant="bordered" name="email" label="Correo electronico" icon={<AiOutlineMail />} />
          <Input variant="bordered" type="password" name="password" label="Contraseña" icon={<MdLockOutline />} />
          <Button type="submit" color="primary" size="sm" isLoading={isPending} startContent={!isPending && <AiOutlineMail />}>Crear cuenta</Button>
        </Form>
      </Formik>
      <Spacer y={2} />
      <div className="flex">
        <h4>¿Ya tienes cuenta?</h4><Spacer /><Link to="/auth/login" className="text-purple-600">Inicia sesion</Link>
      </div>
    </LayoutAuth>
  )
};

export default Register;