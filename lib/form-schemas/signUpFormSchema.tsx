import * as z from 'zod';

const SignUpFormSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Name must be at least 3 characters' })
      .max(20, { message: 'Name must be less than 20 characters' }),
    email: z.email(),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
  });

export default SignUpFormSchema;
