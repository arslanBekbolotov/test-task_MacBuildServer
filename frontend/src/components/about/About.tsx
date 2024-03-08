import React from "react";
import Image from "next/image";
import JohnImage from "../../../public/Group4.png";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div className={`${styles.about_john} section`}>
      <div className={styles.about_info}>
        <h3>Hi, I am John, Creative Technologist</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button>Download Resume</button>
      </div>
      <Image src={JohnImage.src} alt="" width={500} height={500} />
    </div>
  );
};

export default About;
