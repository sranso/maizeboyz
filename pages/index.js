import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maize Boyz</title>
        <meta name="description" content="Maize Boyz" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,600;1,400&display=swap" rel="stylesheet" />
      </Head>

      <img className={styles.astronaut} src="/astronaut.png"/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Maize Boyz
        </h1>
        <p className={styles.description}><i>Welcome to the Maize</i></p>

        <div className={styles.sidebar}>
          <a
            href="https://www.instagram.com/maizeboyz/"
            className={styles.card}
            target="_blank"
          >
            <h2><i>Join</i></h2>
          </a>

          <a
            href="https://vimeo.com/182219968"
            className={styles.card}
            target="_blank"
          >
            <h2><i>Learn</i></h2>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
            target="_blank"
          >
            <h2><i>Act</i></h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <i>May the Maize be strong with you</i>
      </footer>
    </div>
  )
}
