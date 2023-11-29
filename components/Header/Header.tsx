import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';
export const Header = () => {
  return (
    <header className={styles.header__container}>
      <Link href="/" className={styles.header__link}>
        Home
      </Link>
      <Link className={styles.header__link} href="/contacts">
        Contacts
      </Link>
      <Link className={styles.header__link} href="/about">
        About
      </Link>
    </header>
  );
};
