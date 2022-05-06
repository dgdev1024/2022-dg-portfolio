/**
 * @file components/sidebar.jsx
 */

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPerson,
  faCode,
  faContactBook,
  faFileLines,
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
  const [isOnRight, setIsOnRight] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const onSidebarToggleClick = () => {
    setIsShown((shown) => !shown);
  };

  const onSidebarPositionToggle = () => {
    setIsOnRight((right) => !right);
  };

  return (
    <>
      <p className={`text textItalic textCenter ${Styles.sidebarToggleTip}`}>
        Click or tap the DG logo at the corner to reveal the sidebar.
      </p>
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
            <Link href="/">
              <a
                className={Styles.sidebarLink}
                aria-label="Home Page"
                title="Home Page"
              >
                <FontAwesomeIcon icon={faHouse} />
              </a>
            </Link>
            <Link href="/#about">
              <a
                className={Styles.sidebarLink}
                href="#about"
                aria-label="About Me"
                title="About Me"
              >
                <FontAwesomeIcon icon={faPerson} />
              </a>
            </Link>
            <Link href="/#projects">
              <a
                className={Styles.sidebarLink}
                href="#projects"
                aria-label="My Projects"
                title="My Projects"
              >
                <FontAwesomeIcon icon={faCode} />
              </a>
            </Link>
            <Link href="/#contact">
              <a
                className={Styles.sidebarLink}
                href="#contact"
                aria-label="Contact Me"
                title="Contact Me"
              >
                <FontAwesomeIcon icon={faContactBook} />
              </a>
            </Link>
            <a
              className={Styles.sidebarLink}
              href="/assets/resume_2022.pdf"
              aria-label="Resume"
              title="Resume"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFileLines} />
            </a>
            <div className={Styles.sidebarNavigationSeparator}></div>
            <a
              className={`${Styles.sidebarLink} ${Styles.sidebarSocialFacebook}`}
              href="https://facebook.com/dgdev1024"
              target="_blank"
              aria-label="Facebook"
              title="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              className={`${Styles.sidebarLink} ${Styles.sidebarSocialTwitter}`}
              href="https://twitter.com/dgdev1024"
              target="_blank"
              aria-label="Twitter"
              title="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className={`${Styles.sidebarLink} ${Styles.sidebarSocialYoutube}`}
              href="https://www.youtube.com/channel/UCud9v3zZthV8e3IDkIPUFOQ"
              target="_blank"
              aria-label="Youtube"
              title="Youtube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              className={`${Styles.sidebarLink} ${Styles.sidebarSocialInstagram}`}
              href="https://instagram.com/dgdev1024"
              target="_blank"
              aria-label="Instagram"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className={`${Styles.sidebarLink} ${Styles.sidebarSocialGithub}`}
              href="https://github.com/dgdev1024"
              target="_blank"
              aria-label="Github"
              title="Github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </nav>
          <button
            className={Styles.sidebarMoveButton}
            onClick={onSidebarPositionToggle}
            aria-label={isOnRight ? "Move Sidebar Left" : "Move Sidebar Right"}
            title={isOnRight ? "Move Sidebar Left" : "Move Sidebar Right"}
          >
            <FontAwesomeIcon icon={isOnRight ? faArrowLeft : faArrowRight} />
          </button>
        </div>
      </div>
    </>
  );
};
