import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Full Stack Now!</h1>
          <p>
            Приветствую тебя, ищущий знаний. С помощью этого курса ты сможешь
            познакомиться с самыми популярными на сегодняшний день инструментами
            Web-разработки: React, Redux, Node.js, MongoDB, GraphQL и
            TypeScript. Во время обучения основное внимание будет уделяться
            созданию одностраничных web-приложений с помощью React и написанию
            REST API на Node.js.
          </p>
          <p>
            Основой этого ресурса стал{" "}
            <a href='https://fullstackopen.com/en/'>
              курс Full Stack open 2022
            </a>{" "}
            Хельсинского университета, который был переведен и дополнен, чтобы
            помочь тем, кто пока имеет трудности с английским языком.
          </p>
          <div className={styles.buttonsContainer}>
            <Link href='/about'>
              <div className={styles.buttonDark}>О курсе</div>
            </Link>
            <Link href=''>
              <div className={styles.button}>Перейти к курсу</div>
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src='/images/main.svg' alt='Logo' width={320} height={463} />
        </div>
      </div>
    </Layout>
  );
}
