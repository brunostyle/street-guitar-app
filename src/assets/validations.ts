import { ValidCategory } from '@interfaces';
import { array, date, mixed, number, object, string } from 'yup'

export const searchSchema = object({
   query: string().trim().required()
})

export const loginSchema = object({
   email: string().trim().required('Campo requerido').email('Correo electronico no valido'),
   password: string().trim().required('Campo requerido')
})

export const registerSchema = object({
   name: string().trim().required('Campo requerido').min(3, 'Debe tener al menos 3 caracteres').max(30, 'No debe tener mas de 30 caracteres'),
   email: string().trim().required('Campo requerido').email('Correo electronico no valido').max(30, 'No debe tener mas de 30 caracteres'),
   password: string().trim().required('Campo requerido').min(6, 'Debe tener al menos 6 caracteres').max(30, 'No debe tener mas de 30 caracteres'),
})

export const productSchema = object({
   title: string().trim().required('Campo requerido'),
   description: string().trim().required('Campo requerido'),
   price: number().integer().typeError('Debe ser un valor numerico').min(0, 'No debe ser menor a cero'),
   category: mixed().oneOf(ValidCategory, 'La categoria no existe'),
   spotify: string().required('Campo requerido').trim().url('Debe ser una url valida'),
   difficulty: number().required('Campo requerido'),
   tags: array().of(string()).optional(),
   images: array().of(string()).optional(),
})

export const paySchema = object({
   name: string().trim().required('Campo requerido'),
   expires: date().required('Campo requerido').typeError('Debe ser una fecha valida'),
   number: number().required('Campo requerido').integer().typeError('Debe ser un valor numerico'),
   csc: number().required('Campo requerido').integer().typeError('Debe ser un valor numerico')
})

export const userSchema = object({
   name: string().trim().min(3, 'Debe tener al menos 3 caracteres').max(30, 'No debe tener mas de 30 caracteres'),
   email: string().trim().email('Correo electronico no valido').max(30, 'No debe tener mas de 30 caracteres'),
   password: string().trim().min(6, 'Debe tener al menos 6 caracteres').max(30, 'No debe tener mas de 30 caracteres'),
})