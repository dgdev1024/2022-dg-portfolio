/**
 * @file components/sections/hero.jsx
 */

import Image from "next/image";
import Headshot from "../../public/images/dennis.jpg";
import Styles from "./hero.module.css";

export default () => (
  <section className={`section ${Styles.heroSection}`} id="hero">
    <div className={`sectionContainer ${Styles.heroSectionContainer}`}>
      <div className={Styles.heroHeadshotPane}>
        <div className={Styles.heroHeadshot}>
          <Image src={Headshot} alt="Dennis Griffin's Headshot" />
        </div>
      </div>
      <div className={Styles.heroHeroPane}>
        <p className="text textItalic">Hello, world! My name is</p>
        <h1 className={`heading headingVeryLarge headingUppercase`}>
          Dennis Griffin
        </h1>
        <p className="text textLarge">
          A full-stack web developer eagerly looking forward to building your
          personal or business website.
        </p>
        <div className={Styles.heroButtonStrip}>
          <a className={`button ${Styles.heroButtonLeft}`} href="#about">
            Learn More
          </a>
          <a className={`button ${Styles.heroButtonRight}`} href="#contact">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
    <div className={Styles.heroBackground}></div>
  </section>
);
