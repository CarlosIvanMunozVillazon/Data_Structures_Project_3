import * as yup from "yup"; //Import "yup" library for validating forms.

//We create a validation function per form.
export const LoginValidation = yup.object().shape( //validates "login" form
    {
        email: yup.string().trim().required("El e-mail es requerido."),
        password: yup.string().trim().required("La contraseña es requerida")
    }
)

export const RegisterValidation = yup.object().shape(//validates "register" form
    {
        userName: yup.string().trim().required("El nombre es requerido."),
        lastName: yup.string().trim().required("El apellido es requerido."),
        email: yup.string().trim().required("El e-mail es requerido."),
        password: yup.string().trim().required("La contraseña es requerida."),
        confirmPassword: yup.string().trim().required("La confirmación de contraseña es requerida.")
    }
)


//Still need to comment "yup" functions such as : "object(), shape(), string(), trim(), ..."