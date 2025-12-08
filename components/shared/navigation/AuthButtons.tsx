import Link from 'next/link';

import { Button } from '@/components/ui/button';

const AuthButtons = () => {
  return (
    <>
      <Button
        className='bg-blue-500 hover:bg-blue-500/80'
        asChild
      >
        <Link href='/sign-in'>Login</Link>
      </Button>

      <Button
        className='bg-blue-400 hover:bg-blue-400/80'
        asChild
      >
        <Link href='/sign-up'>Register</Link>
      </Button>
    </>
  );
}

export default AuthButtons;