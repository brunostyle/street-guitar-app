import { Spacer, Checkbox } from "@heroui/react"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Form, Formik } from "formik"
import { CustomButton, CustomInput, LayoutAuth } from "@components"
import { AiOutlineMail, FcGoogle, MdLockOutline } from "@icons";
import { loginSchema } from "@validations"
import { ILogin } from "@interfaces"
import { useLogin } from "@hooks";
import { Between } from "@styles";

const storage = 'login-street-guitar';

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
    if (isSelected) localStorage.removeItem(storage);
  }

  return (
    <LayoutAuth title="Inicia Sesión" description="o crea una cuenta">
      <Formik enableReinitialize initialValues={initial} onSubmit={handleSubmit} validationSchema={loginSchema}>
        <Form className="grid gap-4">
          <CustomInput variant="bordered" name="email" label="Correo electronico" placeholder="email@gmail.com" icon={<AiOutlineMail />} />
          <CustomInput variant="bordered" type="password" name="password" label="Contraseña" placeholder="******" icon={<MdLockOutline />} />
          <Checkbox name="remember" isSelected={isSelected} onValueChange={handleChange}>Recuérdame</Checkbox>
          <CustomButton type="submit" color="primary" isLoading={isPending} startContent={!isPending && <AiOutlineMail />}>Continuar con correo</CustomButton>
          <CustomButton variant="bordered" startContent={<FcGoogle />}>Continuar con Google</CustomButton>
        </Form>
      </Formik>
      <Spacer y={4} />
      <Between>
        <h4>¿No tienes cuenta?</h4>
        <Link to="/auth/register" className="text-purple-600">Registrate</Link>
      </Between>
    </LayoutAuth>
  )
};

export default Login;