import { NavItem, navLinks } from './Nav';

export function Footer() {
  return (
    <footer className="relative text-white">
      <div className="relative px-8 pb-5 pt-2 sm:pt-0">
        <div className="flex flex-col items-center justify-between gap-4">
          <FooterNav />
        </div>
      </div>
    </footer>
  );
}

function FooterNav() {
  return (
    <nav className="hidden text-md font-medium lg:block">
      <ul className="flex gap-9">
        {navLinks.map((item) => (
          <li key={item.title}>
            <NavItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
