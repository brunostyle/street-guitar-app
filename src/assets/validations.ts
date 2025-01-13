import * as Yup from 'yup'

export const searchSchema = Yup.object({
   query: Yup.string().trim().required()
})

export const loginSchema = Yup.object({
   email: Yup.string().trim().required('Campo requerido').email('Correo electronico no valido'),
   password: Yup.string().trim().required('Campo requerido')
})

export const registerSchema = Yup.object({
   name: Yup.string().trim().required('Campo requerido').min(3, 'Debe tener al menos 3 caracteres').max(30, 'No debe tener mas de 30 caracteres'),
   email: Yup.string().trim().required('Campo requerido').email('Correo electronico no valido').max(30, 'No debe tener mas de 30 caracteres'),
   password: Yup.string().trim().required('Campo requerido').min(6, 'Debe tener al menos 6 caracteres').max(30, 'No debe tener mas de 30 caracteres'),
})

export const productSchema = Yup.object({
   title: Yup.string().trim()
      .required('Campo requerido'),
   description: Yup.string().trim()
      .required('Campo requerido'),
   price: Yup.number()
      .required('Campo requerido')
      .integer()
      .typeError('Debe ser un valor numerico')
      .min(0, 'No debe ser menor a cero'),
   category: Yup.mixed().oneOf(['rock', 'folclore', 'pop'], 'La categoria no existe'),
   spotify: Yup.string()
      .required('Campo requerido')
      .trim().url('Debe ser una url valida'),
   tags: Yup.array()
      .of(Yup.string()).optional(),
   images: Yup.array()
      .of(Yup.string()).optional(),
})

export const paySchema = Yup.object({
   name: Yup.string().trim()
      .required('Campo requerido'),
   expires: Yup.date()
      .required('Campo requerido')
      .typeError('Debe ser una fecha valida'),
   number: Yup.number()
      .required('Campo requerido')
      .integer()
      .typeError('Debe ser un valor numerico'),
   csc: Yup.number()
      .required('Campo requerido')
      .integer()
      .typeError('Debe ser un valor numerico')
})
