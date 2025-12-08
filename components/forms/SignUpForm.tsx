'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoGithub } from 'react-icons/io5';
import { toast } from 'sonner';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { authClient } from '@/lib/auth-client';
import SignUpFormSchema from '@/lib/form-schemas/signUpFormSchema';

const SignUpForm = () => {
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof SignUpFormSchema>) => {
    await authClient.signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
        callbackURL: '/',
      },
      {
        onRequest: (ctx) => {
          // Show loading
          console.log('onRequest', ctx);
        },
        onSuccess: (ctx) => {
          //redirect to the dashboard or sign in page
          console.log(ctx);
          toast.success('Account created successfully');
          redirect('/');
        },
        onError: (ctx) => {
          // display the error message
          toast.error(ctx.error.message);
        },
      }
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create your account to continue.</CardDescription>
      </CardHeader>
      <CardContent className='w-full max-w-md'>
        <form
          id='sign-up-form'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup className='gap-3'>
            <Controller
              name='name'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='sign-up-form-name'>Name</FieldLabel>
                  <Input
                    {...field}
                    id='sign-up-form-name'
                    aria-invalid={fieldState.invalid}
                    placeholder='John Doe'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name='email'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='sign-up-form-email'>Email</FieldLabel>
                  <Input
                    {...field}
                    type='email'
                    id='sign-up-form-email'
                    aria-invalid={fieldState.invalid}
                    placeholder='john.doe@mail.com'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name='password'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='sign-up-form-password'>
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    type='password'
                    id='sign-up-form-password'
                    aria-invalid={fieldState.invalid}
                    placeholder='********'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name='confirmPassword'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='sign-up-form-confirmPassword'>
                    Confirm Password
                  </FieldLabel>
                  <Input
                    {...field}
                    type='password'
                    id='sign-up-form-confirmPassword'
                    aria-invalid={fieldState.invalid}
                    placeholder='********'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className='flex flex-col gap-3'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex w-full items-center'>
            <Link
              href='/sign-in'
              className='text-sm'
            >
              Already have an account?{' '}
              <span className='text-blue-500'>Sign In</span>
            </Link>
          </div>

          <div className='flex items-center gap-3'>
            <Button
              type='button'
              variant='outline'
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button
              type='submit'
              form='sign-up-form'
              className='bg-blue-400 hover:bg-blue-500'
            >
              Sign Up
            </Button>
          </div>
        </div>

        <p className='text-sm'>Or sign up with</p>
        <Separator />

        <div className='flex items-center gap-3'>
          <Button className='bg-gray-700 hover:bg-gray-800'>
            Sign In with Google <FcGoogle />
          </Button>
          <Button className='bg-gray-700 hover:bg-gray-800'>
            Sign In with GitHub <IoLogoGithub />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignUpForm;
