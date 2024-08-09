import { z } from "zod";
import { schema } from "./schema";

export type FormData = z.infer<typeof schema>;