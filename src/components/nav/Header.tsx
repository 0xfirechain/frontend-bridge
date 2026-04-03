import { DropdownMenu } from '@hyperlane-xyz/widgets';
import Image from 'next/image';
import Link from 'next/link';
import { ConnectWalletButton } from '../../features/wallet/ConnectWalletButton';
import Logo from '../../images/logos/app-logo.svg';
import Name from '../../images/logos/app-name.svg';
import { HamburgerIcon } from '../icons/HamburgerIcon';
import { NavItem, navLinks } from './Nav';

export function Header() {
  return (
    <header className="relative flex w-full items-center justify-between bg-primary-25 px-4 py-3 shadow-[0px_4px_7px_rgba(0,0,0,0.05)] lg:justify-center lg:bg-transparent lg:px-6 lg:pb-2 lg:pt-3 lg:shadow-none">
      {/* Mobile/Tablet: Logo + Hamburger Menu */}
      <div className="flex items-center gap-3 lg:hidden">
        <Link href="/" aria-label="Homepage">
          <Image src={Logo} width={36} alt="" className="h-auto" />
        </Link>
        <DropdownMenu
          button={<HamburgerIcon width={20} height={19} />}
          buttonClassname="rounded p-2 text-primary-700 data-[open]:bg-primary-700 data-[open]:text-white"
          menuClassname="py-4 bg-primary-800"
          menuItems={navLinks.map((item) => (
            <NavItem
              key={item.title}
              item={item}
              className="w-full gap-3 px-6 py-2 text-white hover:bg-primary-700"
            />
          ))}
        />
      </div>

      {/* Desktop: Centered Logo */}
      <Link href="/" aria-label="Homepage" className="hidden flex-col py-2 lg:flex">
        <div className="flex items-end">
          <Image src={Logo} width={46} alt="" className="h-auto" />
          <Image src={Name} width={150} alt="" className="ml-1.5" />
        </div>
      </Link>

      <div className="lg:absolute lg:right-12">
        <ConnectWalletButton />
      </div>
    </header>
  );
}
