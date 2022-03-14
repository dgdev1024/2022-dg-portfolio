/**
 * @file components/sections/home.jsx
 */

import Image from "next/image";
import Headshot from "../../public/images/dennis.jpg";
import Styles from "./home.module.css";

export default () => (
  <section className={`section ${Styles.homeSection}`} id="home">
    <div className={`sectionContainer ${Styles.homeSectionContainer}`}>
      <div className={Styles.homeHeadshotPane}>
        <div className={Styles.homeHeadshot}>
          <Image src={Headshot} alt="Dennis Griffin's Headshot" />
        </div>
      </div>
      <div className={Styles.homeHeroPane}>
        <p className="text textItalic">Hello, World! My name is</p>
        <h1 className={`heading headingVeryLarge headingUppercase`}>
          Dennis Griffin
        </h1>
        <p className="text textLarge">
          A full-stack web developer eagerly looking forward to building your
          personal or business website.
        </p>
        <div className={Styles.homeButtonStrip}>
          <a className={`button ${Styles.homeButtonLeft}`} href="#about">
            Learn More
          </a>
          <a className={`button ${Styles.homeButtonRight}`} href="#contact">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
    <div className={Styles.homeBackground}></div>
  </section>
);
