import { signIn } from 'next-auth/client';
import { signOut } from 'next-auth/client';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/client';

const home = () => {

  const [ session, loading ] = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          prototype
        </h1>

        {!session&& <>
          <button onClick={signIn}>Sign in</button>
        </>
        }

        {session&& <>
          <h1> Signed in as {session.user.email}</h1>
          <button onClick={signOut}>Sign out</button>
        </>
        }

      </main>

    </div>
  )
}

export default home;