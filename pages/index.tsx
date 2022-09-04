import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../sections/header/header";
import SectionFive from "../sections/section-five";
import SectionFour from "../sections/section-four";
import SectionSix from "../sections/section-six/section-six";
import SectionThree from "../sections/section-three";
import SectionTwo from "../sections/section-two";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-[100vh] flex flex-col justify-center items-center w-full ">
        <Header />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
