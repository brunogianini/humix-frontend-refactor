import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/login"
    },

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email@gmail.com" },
                senha: { label: "Senha", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials) return null;

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                    select: { id: true, email: true, password: true }
                });

                if (!user || credentials.senha !== user.password) {
                    return null;
                }

                return user;
            }
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id; 
            }
            return token;
        },

        async session({ session, token }) {
            if (token) {
                session.user = {
                    id: token.id as string, 
                    email: token.email as string,
                };
            }
            return session;
        }
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };