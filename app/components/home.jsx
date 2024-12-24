'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
// import Cookie from 'js-cookie';
import styles from './home.module.css';
import Head from 'next/head';

export const HomePage = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const handleLogin = async (e) => {
    const response = await fetch('/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password }),
    });

    const data = await response.json();

    if (data.success) {
      console.log("Login Success!");
    }
    else {
      console.log("Invalid Credentials!");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Task Manager Portal</title>
        <meta name="description" content="Welcome to our site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background Image */}
      <div
        className={styles.background}
        style={{ backgroundImage: "url('/background.jpg')" }}
      />

      <main className={styles.main}>
        {/* Site logo */}
        <Image
          src="/logo.jpeg"
          alt="Site Logo"
          className={styles.logo}
          width={150}
          height={100}
        />
        {/* Login form */}
        <h1 className={styles.title}>Log-In</h1>
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            {/* username input */}
            <label htmlFor="username" className={styles.label}>
              Username:
            </label>
            <input
              type="text"
              id="username"
              className={styles.input}
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            {/* Password input */}
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit button */}
          <button className={styles.button} type="submit">
            Login
          </button>
        </form>
      </main>
    </div>
  );
};