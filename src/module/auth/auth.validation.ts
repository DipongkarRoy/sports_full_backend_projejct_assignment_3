import { z } from "zod";

export const loginValidationSchema = z.object({
    body: z.object({
        email: z.string({ required_error: 'email is required.' }),
        password: z.string({ required_error: 'Password is required' }),
    }),
});


