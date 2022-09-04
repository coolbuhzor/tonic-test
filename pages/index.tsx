import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../sections/footer";
import Header from "../sections/header/header";
import SectionFive from "../sections/section-five";
import SectionFour from "../sections/section-four";
import SectionSix from "../sections/section-six/section-six";
import SectionThree from "../sections/section-three";
import SectionTwo from "../sections/section-two";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Boldo</title>
        <meta name="description" content="A landing page design" />
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
      <Footer />
    </div>
  );
};

export default Home;
