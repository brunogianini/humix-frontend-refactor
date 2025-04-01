// types/next-auth.d.ts
import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";

// Definindo o tipo da sessão
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
    };
  }
}
