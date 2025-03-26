"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react"
import { useState } from "react";

export default function LoginForm(){
    const [error, setError] = useState("")

    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const data = {
            email: formData.get("email"),
            senha: formData.get("senha")
        }

        const result = await signIn("credentials", { ...data, callbackUrl: "/" });

        if (result?.error) {
            setError("Credenciais inválidas");
        }
    }

    return(
        <form onSubmit={login}>
            <Card className="p-4 flex gap-8 w-96 h-96 justify-center">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold tracking-tighter">Entre com a sua conta</CardTitle>
                    <CardDescription>Ultilize seu email e senha</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-5">
                    {error && <p className="text-red-500">{error}</p>}
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" id="email" placeholder="exemplo@email.com" type="email" />
                    </div>
                    <div>
                        <Label htmlFor="senha">Senha</Label>
                        <Input name="senha" id="senha" placeholder="senha" type="password" />
                    </div>

                    <Button className="mt-6 w-full cursor-pointer">Entrar</Button>
                </CardContent>
            </Card>
        </form>
    )
}