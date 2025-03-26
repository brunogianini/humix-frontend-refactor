import LoginForm from "@/components/login-form"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { signIn } from "next-auth/react"
import "@testing-library/jest-dom"

jest.mock("next-auth/react");

describe("LoginForm", () => {
    it("deve renderizar os elementos do formulário corretamente", () => {
        render(<LoginForm />);

        expect(screen.getByText("Entre com a sua conta")).toBeInTheDocument();
        expect(screen.getByText("Ultilize seu email e senha")).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Senha")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
    });

    it("deve chamar signIn com as credenciais corretas ao enviar o formulário", async () => {
        render(<LoginForm />);

        const emailInput = screen.getByLabelText("Email");
        const senhaInput = screen.getByLabelText("Senha");
        const submitButton = screen.getByRole("button", { name: /entrar/i });

        fireEvent.change(emailInput, { target: { value: "a@email.com" } });
        fireEvent.change(senhaInput, { target: { value: "123" } });
        fireEvent.click(submitButton);

        expect(signIn).toHaveBeenCalledWith("credentials", {
            email: "a@email.com",
            senha: "123",
            callbackUrl: "/",
        });
    });

    it("deve exibir uma mensagem de erro ao tentar um login inválido", async () => {
        signIn.mockResolvedValueOnce({ error: "Credenciais inválidas" }); // Simula erro no login

        render(<LoginForm />);

        const emailInput = screen.getByLabelText("Email");
        const senhaInput = screen.getByLabelText("Senha");
        const submitButton = screen.getByRole("button", { name: /entrar/i });

        fireEvent.change(emailInput, { target: { value: "email@invalido.com" } });
        fireEvent.change(senhaInput, { target: { value: "senhaerrada" } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText("Credenciais inválidas")).toBeInTheDocument();
        });
    });

    it("deve chamar signIn e redirecionar para a URL correta após o login", async () => {
        signIn.mockResolvedValueOnce({ ok: true });

        render(<LoginForm />);

        const emailInput = screen.getByLabelText("Email");
        const senhaInput = screen.getByLabelText("Senha");
        const submitButton = screen.getByRole("button", { name: /entrar/i });

        fireEvent.change(emailInput, { target: { value: "a@gmail.com" } });
        fireEvent.change(senhaInput, { target: { value: "123" } });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(signIn).toHaveBeenCalledWith("credentials", {
                email: "a@gmail.com",
                senha: "123",
                callbackUrl: "/",
            });
        });
    });
});
