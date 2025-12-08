import * as z from 'zod';

const SignInFormSchema = z.object({
  email: z.email().min(1, { message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

export default SignInFormSchema;
