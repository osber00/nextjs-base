"use server"
import { signIn } from "@/configs/auth/auth";
import { LoginSchema } from "@/configs/zod/zod";
import { AuthError } from "next-auth";
import { z } from "zod";

export const LoginAction = async (data: z.infer<typeof LoginSchema>) => {
    try {
        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });
        return { success: true };
    } catch (error) {
        if (error instanceof AuthError) {
            return { error: (error.cause as { err?: { message: string } })?.err?.message || "Error desconocido" };
        }
        return { error: "Error desconocido" }
    }
}
