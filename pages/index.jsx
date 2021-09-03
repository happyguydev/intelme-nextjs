import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { CircularProgress } from '@material-ui/core';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>IntelMe</title>
        <link rel="icon" href="/frontend-dev/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CircularProgress />
      </main>
    </div>
  );
}
