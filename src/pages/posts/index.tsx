import styles from './styles.module.scss';
import Head from 'next/head';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>13 de maio de 2022</time>
            <strong>Esse titulo é ficticio</strong>
            <p>In this guide, you will learn howe to creazt emonorego to manage muultiples pacleges with a shared</p>
          </a>
          <a href='#'>
            <time>13 de maio de 2022</time>
            <strong>Esse titulo é ficticio</strong>
            <p>In this guide, you will learn howe to creazt emonorego to manage muultiples pacleges with a shared</p>
          </a>
          <a href='#'>
            <time>13 de maio de 2022</time>
            <strong>Esse titulo é ficticio</strong>
            <p>In this guide, you will learn howe to creazt emonorego to manage muultiples pacleges with a shared</p>
          </a>
        </div>
      </main>
    </>
  )
}