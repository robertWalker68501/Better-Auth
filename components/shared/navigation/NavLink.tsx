'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const NavLink = ({ href, text, classes, isMobile, onClick }: NavLinkProps) => {
  const pathname = usePathname();

  const normalizePath = (path: string) => path.replace(/\/+$/, '') || '/';

  const current = normalizePath(pathname);
  const target = normalizePath(href);

  const isActive =
    current === target || (target !== '/' && current.startsWith(`${target}/`));

  return (
    <Link
      href={href}
      className={cn(
        'font-semibold text-gray-200 transition-colors duration-300 hover:text-blue-500',
        isMobile && 'text-2xl text-gray-300 hover:text-blue-500',
        isActive && 'text-blue-500',
        classes
      )}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default NavLink;
