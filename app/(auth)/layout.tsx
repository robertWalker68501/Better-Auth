import { ReactNode } from 'react';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex min-h-dvh w-dvw flex-col items-center justify-center'>
      <div className='absolute top-5 left-5'>
        <Button
          size='sm'
          className='bg-gray-800 text-gray-300 hover:bg-gray-700'
          asChild
        >
          <Link
            href='/'
            className='flex items-center gap-2'
          >
            <ArrowLeft className='size-4' />
            Go Back
          </Link>
        </Button>
      </div>
      <div className='w-full max-w-md'>{children}</div>
    </div>
  );
};

export default AuthLayout;
