import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const SiteLogo = ({
  href = '/',
  text = 'Next.js + Better-Auth',
  classes,
  imgSrc = '/assets/images/logo.png',
  imgAlt = 'Next.js + Better-Auth',
  imgWidth = 40,
  imgHeight = 40,
  onClick,
}: SiteLogoProps) => {
  return (
    <Link
      href={href}
      className={cn('flex items-center gap-2 text-2xl font-semibold', classes)}
      onClick={onClick}
    >
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
      />
      {text}
    </Link>
  );
};

export default SiteLogo;
