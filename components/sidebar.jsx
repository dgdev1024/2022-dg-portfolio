/**
 * @file components/sidebar.jsx
 */

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPerson,
  faCode,
  faContactBook,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "./svg/logo";
import Styles from "./sidebar.module.css";

export default () => {
  const [isOnRight, setIsOnRight] = useState(true);
  const [isShown, setIsShown] = useState(true);

  const onSidebarToggleClick = () => {
    setIsShown((shown) => !shown);
  };

  const onSidebarPositionToggle = () => {
    setIsOnRight((right) => !right);
  };

  return (
    <div
      className={`${Styles.sidebar} ${isShown && Styles.sidebarShown} ${
        isOnRight === true ? Styles.sidebarRight : Styles.sidebarLeft
      }`}
    >
      <button
        className={Styles.sidebarToggle}
        onClick={onSidebarToggleClick}
        aria-label={isShown ? "Hide Sidebar" : "Reveal Sidebar"}
        title={isShown ? "Hide Sidebar" : "Reveal Sidebar"}
      >
        <Logo className={Styles.sidebarLogo} viewBox="0 0 64 64" />
      </button>
      <div className={Styles.sidebarBody}>
        <nav className={Styles.sidebarNavigation}>
          <a className={Styles.sidebarLink} href="#">
            <FontAwesomeIcon icon={faHouse} />
          </a>
          <a className={Styles.sidebarLink} href="#">
            <FontAwesomeIcon icon={faPerson} />
          </a>
          <a className={Styles.sidebarLink} href="#">
            <FontAwesomeIcon icon={faCode} />
          </a>
          <a className={Styles.sidebarLink} href="#">
            <FontAwesomeIcon icon={faContactBook} />
          </a>
          <div className={Styles.sidebarNavigationSeparator}></div>
          <a
            className={`${Styles.sidebarLink} ${Styles.sidebarSocialFacebook}`}
            href="https://facebook.com/dgdev1024"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className={`${Styles.sidebarLink} ${Styles.sidebarSocialTwitter}`}
            href="https://twitter.com/dgdev1024"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            className={`${Styles.sidebarLink} ${Styles.sidebarSocialYoutube}`}
            href="https://www.youtube.com/channel/UCud9v3zZthV8e3IDkIPUFOQ"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            className={`${Styles.sidebarLink} ${Styles.sidebarSocialInstagram}`}
            href="https://instagram.com/dgdev1024"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            className={`${Styles.sidebarLink} ${Styles.sidebarSocialGithub}`}
            href="https://github.com/dgdev1024"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </nav>
        <button
          className={Styles.sidebarMoveButton}
          onClick={onSidebarPositionToggle}
        >
          <FontAwesomeIcon icon={isOnRight ? faArrowLeft : faArrowRight} />
        </button>
      </div>
    </div>
  );
};
