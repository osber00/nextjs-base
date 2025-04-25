import { object, string } from "zod"

export const LoginSchema = object({
    email: string({ required_error: "El email es requerido" })
        .min(1, "El email es requerido")
        .email("El email no es válido"),
    password: string({ required_error: "La contraseña requerida" })
        .min(1, "La contraseña es requerida")
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .max(32, "La contraseña no puede tener más de 32 caracteres"),
})

export const RegistroSchema = object({
    email: string({ required_error: "El email es requerido" })
        .min(1, "El email es requerido")
        .email("El email no es válido"),
    password: string({ required_error: "La contraseña requerida" })
        .min(1, "La contraseña es requerida")
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .max(32, "La contraseña no puede tener más de 32 caracteres"),
    telefono: string({ required_error: "El teléfono es requerido" })
        .min(1, "El teléfono es requerido")
        .max(10, "El teléfono no puede tener más de 10 caracteres"),
})