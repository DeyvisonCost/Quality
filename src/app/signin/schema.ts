import { z } from "zod";

export const schema = z
	.object({
		email: z.string().email({ message: "Email inválido" }),
		password: z
			.string()
			.min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
		confirmPassword: z
			.string()
			.min(6, {
				message: "A confirmação da senha deve ter pelo menos 6 caracteres",
			}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "As senhas não coincidem",
		path: ["confirmPassword"],
	});