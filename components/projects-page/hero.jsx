/**
 * @file components/projects-page/hero.jsx
 */

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Styles from "./hero.module.css";

export default ({
  heroIcon,
  heroTitle,
  heroDescription,
  prevCategory,
  nextCategory,
}) => {
  return (
    <>
      <section className={`section ${Styles.heroSection}`}>
        <div className={`sectionContainer ${Styles.heroSectionContainer}`}>
          <div className={Styles.heroCategoryControl}>
            <button
              className={`button ${Styles.heroCategoryButton}`}
              aria-label="Previous Category"
              title="Previous Category"
              onClick={prevCategory}
            >
              <Fa icon={faChevronLeft} />
            </button>
            <div className={Styles.heroCategoryImage}>
              <Fa icon={heroIcon} />
            </div>
            <button
              className={`button ${Styles.heroCategoryButton}`}
              aria-label="Next Category"
              title="Next Category"
              onClick={nextCategory}
            >
              <Fa icon={faChevronRight} />
            </button>
          </div>
          <div className={Styles.heroCaption}>
            <h2
              className={`heading headingLarge headingCenter ${Styles.heroHeading}`}
            >
              {heroTitle}
            </h2>
            <p
              className={`text textItalic textLarge textCenter ${Styles.heroText}`}
            >
              {heroDescription}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
