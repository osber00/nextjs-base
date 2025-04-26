"use client"
import { signOut } from "next-auth/react"
import { Button } from "../ui/button"

const LogoutBoton = () => {

    const handleLogout = async () => {
        await signOut({
            callbackUrl: '/login',
        })
    }

  return (
    <Button onClick={handleLogout} className="bg-amber-600 cursor-pointer">Cerrar Sesión</Button>
  )
}

export default LogoutBoton