import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
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

            if(credentials.email === "a@gmail.com" && credentials.senha === "123") {
                return{
                    id: "1",
                    name: "Teste",
                    email: "a@gmail.com"
                }
            }else{
                return null
            }
          }
        })
      ]
})

export { handler as GET, handler as POST }