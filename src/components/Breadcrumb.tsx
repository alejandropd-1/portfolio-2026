import Link from 'next/link';
import { Folder } from 'lucide-react';
import styles from '@/styles/components/_breadcrumb.module.scss';

export default function Breadcrumb({ paths }: { paths: string[] }) {
  return (
    <div className={`${styles.breadcrumb} print:hidden`}>
      <Folder size={14} />
      <div className={styles.breadcrumb__list}>
        <Link href="/" className={styles.breadcrumb__link}>~</Link>
        <span className={styles.breadcrumb__separator}>/</span>
        <Link href="/" className={styles.breadcrumb__link}>root</Link>
        {paths.map((path, index) => (
          <span key={index} className={styles.breadcrumb__list}>
            <span className={styles.breadcrumb__separator}>/</span>
            <span className={styles.breadcrumb__current}>{path}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
