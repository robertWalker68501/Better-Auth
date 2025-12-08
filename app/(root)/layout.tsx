import { ReactNode } from 'react';

import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
