import { z } from "zod";

export const schema = z.object({
  nome: z
    .string()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  mensagem: z
    .string()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" }),
});