import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials, req) => {
        const { username, password } = credentials as any
        const res = await fetch("https://example.com/api/auth", {
          method: "POST",
          body: JSON.stringify({ username, password }),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json() 
        if (res.ok && user) {
          return user
        } else {
          return null
        }
      }
    })
  ]
  
})