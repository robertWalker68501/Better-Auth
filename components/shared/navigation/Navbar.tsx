import AuthButtons from '@/components/shared/navigation/AuthButtons';
import MobileNav from '@/components/shared/navigation/MobileNav';
import NavLink from '@/components/shared/navigation/NavLink';
import SiteLogo from '@/components/shared/SiteLogo';
import { NAV_LINKS } from '@/constants';

const Navbar = () => {
  return (
    <div className=''>
      <nav className='mt-5 flex items-center justify-between rounded-md border border-blue-900/30 bg-transparent p-4 shadow'>
        {/* Site logo */}
        <SiteLogo classes='text-gray-300' />

        {/* Desktop navigation */}
        <div className='hidden items-center gap-4 md:flex'>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.id}
              href={link.href}
              text={link.label}
            />
          ))}

          <AuthButtons />
        </div>

        {/* Mobile navigation */}
        <div className='md:hidden'>
          <MobileNav />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
