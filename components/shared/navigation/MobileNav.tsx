'use client';

import { useState } from 'react';

import { MenuIcon } from 'lucide-react';

import NavLink from '@/components/shared/navigation/NavLink';
import SiteLogo from '@/components/shared/SiteLogo';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_LINKS } from '@/constants';

const MobileNav = () => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <Sheet
      open={isSheetOpen}
      onOpenChange={setIsSheetOpen}
    >
      <SheetTrigger>
        <MenuIcon className='size-6 cursor-pointer' />
      </SheetTrigger>
      <SheetContent className='bg-linear-to-br from-blue-500 to-gray-200'>
        <SheetHeader>
          <SheetTitle className='text-gray-300'>
            <SiteLogo onClick={closeSheet} />
          </SheetTitle>
          <SheetDescription className='text-gray-200'>
            This template can be used to speed up development. All the auth
            pages needed are included.
          </SheetDescription>
        </SheetHeader>

        <div className='flex flex-col gap-4 px-4'>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.id}
              href={link.href}
              text={link.label}
              isMobile
              onClick={closeSheet}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
