'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Monitor, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import styles from '@/styles/components/_navigation.module.scss';
import { clsx } from 'clsx';

const navLinks = [
  { name: 'PROJECTS', href: '/' },
  { name: 'RESUME', href: '/resume' },
  { name: 'ABOUT', href: '/about' },
  { name: 'ARCHIVE', href: '/archive' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme === 'light') {
      setTheme('light');
      document.documentElement.classList.add('light');
    } else {
      setTheme('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  if (!mounted) {
    return (
      <nav className={clsx(styles.nav, "opacity-0")}>
        <div className={styles.nav__logo}><span>Ale</span>Design<span>;</span></div>
      </nav>
    );
  }

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.nav__logo}>
        <span>Ale</span>Design<span>;</span>
      </Link>

      <div className={styles.nav__links}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(styles.nav__link, isActive && styles['nav__link--active'])}
            >
              <span>{link.name}</span>
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className={styles.nav__pill}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>

      <div className={styles.nav__actions}>
        <button onClick={toggleTheme} className={styles.nav__btn}>
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <button className={styles.nav__btn}>
          <Monitor size={18} />
        </button>
        <button className={styles.nav__btn}>
          <Code size={18} />
        </button>
      </div>
    </nav>
  );
}
