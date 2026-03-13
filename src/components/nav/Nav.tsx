import { GithubIcon } from '@hyperlane-xyz/widgets';
import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef, ReactNode } from 'react';
import { links } from '../../consts/links';
import { BookIcon } from '../icons/BookIcon';
import { QuestionMarkIcon } from '../icons/QuestionMarkIcon';
import { StakeIcon } from '../icons/StakeIcon';
import { WebSimpleIcon } from '../icons/WebSimpleIcon';
import { XIcon } from '../icons/XIcon';

interface NavLinkItem {
  title: string;
  url: string;
  icon: ReactNode;
}

export const navLinks: NavLinkItem[] = [
  { title: 'DonaSwap', url: links.stake, icon: <StakeIcon width={20} height={20} /> },
  { title: 'X.com', url: links.twitter, icon: <XIcon width={19} height={17} /> },
  { title: 'Fire Station', url: links.home, icon: <WebSimpleIcon width={20} height={20} /> },
  {
    title: 'Faucet',
    url: links.support,
    icon: <QuestionMarkIcon width={20} height={20} color="#ffffff" />,
  },
  {
    title: 'Docs',
    url: links.docs,
    icon: <BookIcon color="#ffffff" width={23} height={16} />,
  },
  {
    title: 'Github',
    url: links.github,
    icon: <GithubIcon width={20} height={20} color="#ffffff" />,
  },
];

interface NavItemProps {
  item: NavLinkItem;
  className?: string;
}

export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(function NavItem(
  { item, className },
  ref,
) {
  return (
    <Link
      ref={ref}
      className={clsx(
        'flex items-center gap-2 text-white decoration-white underline-offset-2 hover:underline',
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
      href={item.url}
    >
      <div className="w-5">{item.icon}</div>
      <span>{item.title}</span>
    </Link>
  );
});
