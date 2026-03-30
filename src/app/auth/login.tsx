import { Checkbox, CheckboxContent, CheckboxControl, CheckboxIndicator, Label } from "@heroui/react"
import { useEffect, useState } from "react";
import { Form, Formik } from "formik"
import { CustomButton, CustomInput, CustomInputPassword, Divider } from "@components"
import { IoMailOutline, FcGoogle, IoLockClosedOutline } from "@icons";
import { loginSchema } from "@validations"
import type { ILogin } from "@interfaces"
import { useLogin } from "@hooks";
import { Gap } from "@styles";

const storage = 'login-street-guitar';

export const Login = () => {
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
          <CustomInput name="email" label="Correo electronico" placeholder="email@gmail.com" icon={<IoMailOutline />} />
          <CustomInputPassword name="password" label="Contraseña" placeholder="******" icon={<IoLockClosedOutline />} isVisible={isVisible} setIsVisible={setIsVisible} />
          <Checkbox id="remember" isSelected={isSelected} onChange={handleChange}>
            <CheckboxControl>
              <CheckboxIndicator />
            </CheckboxControl>
            <CheckboxContent>
              <Label htmlFor="remember">Recuérdame</Label>
            </CheckboxContent>
          </Checkbox>
          <CustomButton type="submit" fullWidth isLoading={isPending} icon={<IoMailOutline />}>Continuar con correo</CustomButton>
          <Divider>OR</Divider>
          <CustomButton fullWidth variant="outline" icon={<FcGoogle />}>Continuar con Google</CustomButton>
        </Gap>
      </Form>
    </Formik>
  )
};