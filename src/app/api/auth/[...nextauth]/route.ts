import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // Novo caminho

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };