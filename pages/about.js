import Head from "next/head";
import style from "../styles/Home.module.css";

const About = () => {
  return (
    <div>
      <Head>
        <title>about</title>
      </Head>
      {" "}
      <h2 className={style.aboutTXT}>About page</h2>
    </div>
  );
};

export default About;
