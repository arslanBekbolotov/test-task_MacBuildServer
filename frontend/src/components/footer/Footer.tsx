import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import fb from "../../../public/fb.png";
import insta from "../../../public/insta.png";
import twitter from "../../../public/twitter.png";
import Linkedin from "../../../public/Linkedin.png";

const Footer = () => {
  const icons = [
    { path: fb, name: "facebook" },
    { path: insta, name: "instagram" },
    { path: twitter, name: "twitter" },
    { path: Linkedin, name: "linkedin" },
  ];

  return (
    <div className={`${styles.footer} section`}>
      <div className={styles.footer_icons}>
        {icons.map((icon) => (
          <Image
            src={icon.path.src}
            alt={icon.name}
            width={30}
            height={30}
          ></Image>
        ))}
      </div>
      <span>Copyright ©2020 All rights reserved </span>
    </div>
  );
};

export default Footer;
