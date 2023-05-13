import * as yup from "yup";

export const LoginValidation = yup.object().shape( //Esta es nuestra primera función de validación
    {
        email: yup.string().trim().required("El e-mail es requerido."),
        password: yup.string().trim().required("La contraseña es requerida")
    }
)

export const RegisterValidation = yup.object().shape(
    {
        userName: yup.string().trim().required("El nombre es requerido."),
        lastName: yup.string().trim().required("El apellido es requerido."),
        email: yup.string().trim().required("El e-mail es requerido."),
        password: yup.string().trim().required("La contraseña es requerida."),
        confirmPassword: yup.string().trim().required("La confirmación de contraseña es requerida.")
    }
)