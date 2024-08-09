import { z } from "zod";

export const schema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().nonempty({ message: 'Senha é obrigatória' }),
});