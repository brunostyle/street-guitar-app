import { Spacer, Button, Checkbox } from "@nextui-org/react"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Form, Formik } from "formik"
import { Input, LayoutAuth } from "@components"
import { AiOutlineMail, FcGoogle, MdLockOutline } from "@icons";
import { loginSchema } from "@validations"
import { ILogin } from "@interfaces"
import { useLogin } from "@hooks";

const storage = 'login-lb-digital';

const Login = () => {
  const { mutate: login, isPending } = useLogin();
  const [isSelected, changeIsSelected] = useState(!!localStorage.getItem(storage));
  const [initial, changeInitial] = useState({ email: '', password: '' });

  useEffect(() => {
    changeInitial(JSON.parse(localStorage.getItem(storage)!) ?? initial);
  }, [])

  const handleSubmit = (data: ILogin) => {
    login(data);
    if (isSelected) localStorage.setItem(storage, JSON.stringify(data))
  }
 
  const handleChange = () => {
    changeIsSelected(!isSelected);
    if(isSelected) localStorage.removeItem(storage);
  }

  return (
    <LayoutAuth title="Inicia Sesión" description="o crea una cuenta">
      <Formik initialValues={initial} onSubmit={handleSubmit} enableReinitialize validationSchema={loginSchema}>
        <Form className="grid gap-4">
          <Input variant="bordered" name="email" label="Correo electronico" icon={<AiOutlineMail />} />
          <Input variant="bordered" type="password" name="password" label="Contraseña" icon={<MdLockOutline />} />
          <Checkbox name="remember" isSelected={isSelected} onValueChange={handleChange}>Recuérdame</Checkbox>
          <Button type="submit" color="primary" isLoading={isPending} startContent={!isPending && <AiOutlineMail />}>Continuar con correo</Button>
          <Button variant="bordered" startContent={<FcGoogle />}>Continuar con Google</Button>
        </Form>
      </Formik>
      <Spacer y={2} />
      <div className="flex">
        <h4>¿No tienes cuenta?</h4><Spacer /><Link to="/auth/register" className="text-purple-600">Registrate</Link>
      </div>
    </LayoutAuth>
  )
};

export default Login;