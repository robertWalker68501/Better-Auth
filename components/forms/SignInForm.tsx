'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoGithub } from 'react-icons/io5';
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
import SignInFormSchema from '@/lib/form-schemas/signInFormSchema';

const SignInForm = () => {
  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: z.infer<typeof SignInFormSchema>) => {
    console.log(data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Sign in to enjoy the application.</CardDescription>
      </CardHeader>
      <CardContent className='w-full max-w-md'>
        <form
          id='sign-in-form'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup className='gap-3'>
            <Controller
              name='email'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='sign-in-form-email'>Email</FieldLabel>
                  <Input
                    {...field}
                    type='email'
                    id='sign-in-form-email'
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
                  <FieldLabel htmlFor='sign-in-form-password'>
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    type='password'
                    id='sign-in-form-password'
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
              href='/sign-up'
              className='text-sm'
            >
              Don&#39;t have an account?{' '}
              <span className='text-blue-500'>Sign Up</span>
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
              form='sign-in-form'
              className='bg-blue-400 hover:bg-blue-500'
            >
              Sign In
            </Button>
          </div>
        </div>

        <p className='text-sm'>Or sign in with</p>
        <Separator />

        <div className='flex gap-3'>
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

export default SignInForm;
