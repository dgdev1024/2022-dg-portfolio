/**
 * @file components/card.jsx
 */

import Image from "next/image";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import Styles from "./card.module.css";

export default ({ className, backgroundImage, icon, title, children }) => {
  return (
    <div className={`${Styles.card} ${className}`}>
      {backgroundImage && (
        <div className={Styles.cardBackgroundImage}>
          {backgroundImage.startsWith("https://codepen.io") ? (
            <img
              className={Styles.cardBackground}
              src={backgroundImage}
              alt={title}
            />
          ) : (
            <Image
              className={Styles.cardBackground}
              src={backgroundImage}
              alt={title}
              layout="fill"
            />
          )}
        </div>
      )}
      <div className={Styles.cardContainer}>
        <div
          className={`${Styles.cardTitleContainer} ${
            backgroundImage && Styles.cardTitleContainerWithBackgroundImage
          }`}
        >
          {icon && <Fa icon={icon} />}
          <h3
            className={`heading headingSmall headingCenter ${Styles.cardHeading}`}
          >
            {title}
          </h3>
        </div>
        <div className={Styles.cardBody}>{children}</div>
      </div>
    </div>
  );
};
