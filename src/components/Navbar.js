"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkToggle from '@/components/DarkToggle';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Projects', href: '/' },
    { label: 'Resume', href: '/resume' },
    { label: 'About', href: '/about' },
    { label: 'Archive', href: '/archive' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__inner container">
        <Link href="/" className="navbar__logo">
          AleDesign
        </Link>

        <ul className="navbar__menu">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className="navbar__item"
                data-active={pathname === item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="navbar__system-icons">
            <i className="fa-solid fa-sun" title="Theme"></i>
            <i className="fa-solid fa-desktop" title="System"></i>
            <i className="fa-solid fa-code" title="Developer Mode"></i>
          </li>
          <li className="navbar__toggle">
            <DarkToggle initialTheme="dark" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
