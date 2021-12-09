import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Game List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Cupidatat nisi laborum ullamco qui fugiat officia dolore ea non
          incididunt irure laboris laborum pariatur. Ad eu sunt nulla laborum
          duis consequat culpa proident aute laborum pariatur eiusmod velit.
          Laboris culpa duis tempor ad.
        </p>
        <p className={styles.text}>
          Cupidatat nisi laborum ullamco qui fugiat officia dolore ea non
          incididunt irure laboris laborum pariatur. Ad eu sunt nulla laborum
          duis consequat culpa proident aute laborum pariatur eiusmod velit.
          Laboris culpa duis tempor ad.
        </p>
        <Link href="/games">
          <a className={styles.btn}>See Game Listing</a>
        </Link>
      </div>
    </>
  );
}
