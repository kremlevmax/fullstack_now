import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/About.module.css";

const About = () => {
  return (
    <Layout>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>О Курсе</h1>
          <p>
            Главная цель этого курса - познакомить вас с основными инструментами
            современной web-разработки на JavaScript. Предполагается, что
            преступая к обучению вы владенеете основами этого языка
            программирования, а так же HTML и CSS. Вы не обязаны знать их на
            профессиональном уровне, но понимание терминов
            &quot;переменная&quot;, &quot;функция&quot; и основ верстки
            значительно упростит понимание материала. С остальными понятиями
            можно разобраться по ходу дела.
          </p>
          <p>
            Буду признателен, если в качестве благодарности вы поставите
            звездочку{" "}
            <a
              href='https://github.com/kremlevmax/fullstack_now'
              rel='noreferrer'
              target='_blank'
            >
              этому проекту на GitHub.
            </a>
          </p>
          <div className={styles.buttonsContainer}>
            <Link href='/'>
              <div className={styles.buttonDark}>На главную</div>
            </Link>
            <Link href=''>
              <div className={styles.button}>Перейти к курсу</div>
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='/images/laptop.svg'
            alt='Laptop'
            width={320}
            height={400}
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
