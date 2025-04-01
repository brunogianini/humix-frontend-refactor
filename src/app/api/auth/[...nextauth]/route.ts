import prisma from "@/lib/prisma"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions = NextAuth({
    pages: {
        signIn: "/login"
    },

    providers: [
        CredentialsProvider({
          name: "Credentials",

          credentials: {
            email: { label: "email", type: "email", placeholder: "email@gmail.com" },
            senha: { label: "senha", type: "password" }
          },
          async authorize(credentials, req) {
            if(!credentials) return null

            const user = await prisma.user.findUnique({ where: {email: credentials.email}})
            if(credentials.senha !== user?.password){
              return null
            }

            if(user) {
                return{
                    id: user.id,
                    name: user.usuario,
                    email: user.email
                }
            }else{
              return null
            }
          }
        })
      ]
})

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST,authOptions  }