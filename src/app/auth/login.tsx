import { Checkbox } from "@heroui/react"
import { useEffect, useState } from "react";
import { Form, Formik } from "formik"
import { CustomButton, CustomInput, CustomInputPassword, Separator } from "@components"
import { IoMailOutline, FcGoogle, IoLockClosedOutline } from "@icons";
import { loginSchema } from "@validations"
import type { ILogin } from "@interfaces"
import { useLogin } from "@hooks";
import { Gap } from "@styles";

const storage = 'login-street-guitar';

const Login = () => {
  const { mutate: login, isPending } = useLogin();
  const [isSelected, changeIsSelected] = useState(!!localStorage.getItem(storage));
  const [initial, changeInitial] = useState({ email: '', password: '' });
  const [isVisible, setIsVisible] = useState(false);

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
    <Formik enableReinitialize initialValues={initial} onSubmit={handleSubmit} validationSchema={loginSchema}>
      <Form>
        <Gap>
          <CustomInput variant="bordered" name="email" label="Correo electronico" placeholder="email@gmail.com" icon={<IoMailOutline />} />
          <CustomInputPassword variant="bordered" name="password" label="Contraseña" placeholder="******" icon={<IoLockClosedOutline />} isVisible={isVisible} setIsVisible={setIsVisible} />
          <Checkbox name="remember" isSelected={isSelected} onValueChange={handleChange}>Recuérdame</Checkbox>
          <CustomButton type="submit" color="primary" isLoading={isPending} startContent={<IoMailOutline />}>Continuar con correo</CustomButton>
          <Separator>OR</Separator>
          <CustomButton variant="bordered" startContent={<FcGoogle />}>Continuar con Google</CustomButton>
        </Gap>
      </Form>
    </Formik>
  )
};

export default Login;