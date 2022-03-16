/**
 * @file components/sections/about.jsx
 */

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faLaptop,
  faServer,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../card";
import Styles from "./about.module.css";

export default () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={`section ${Styles.aboutSection}`} id="about">
      <div className={`sectionContainer ${Styles.aboutSectionContainer}`}>
        <h2 className="heading headingLarge headingCenter">About Me</h2>
        <p className="text textCenter textItalic">
          Mouse over or tap the cards below.
        </p>
        <div className={Styles.aboutCardContainer}>
          <Card title="Overview" icon={faEye}>
            <p className="text textCenter">
              Full-stack web developer with {currentYear - 2017}+ years of
              experience in developing front-end, back-end and full-stack web
              applications; built on a bedrock of {currentYear - 2008}+ years of
              experience in computer programming in general.
            </p>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              className={`button ${Styles.aboutResumeButton}`}
            >
              View My Resume
            </a>
          </Card>
          <Card title="Misson" icon={faFlag} className={Styles.aboutCardBlue}>
            <p className={`text textCenter`}>
              To freelance and to seek a position in an exciting company in the
              field of web development. I'm from Southwest Michigan, but I'm
              more than willing to work remotely, as well!
              <br />
              <br />I look forward to you checking out my work, and to working
              with you, too!
            </p>
          </Card>
          <Card
            title="Frontend"
            icon={faLaptop}
            className={Styles.aboutCardGreen}
          >
            <p className={`text textCenter`}>
              Experience with developing website and web application frontends
              featuring robust user interfaces and user experiences, approached
              with a mobile-first responsive design philosophy.
            </p>
            <h4 className={`heading headingVerySmall headingLight`}>
              My Frontend Stack:
            </h4>
            <p className={`text textItalic textCenter`}>
              HTML5, CSS3, SASS/SCSS, JavaScript (ES6+), React.JS, Next.JS
              (full-stack)
            </p>
          </Card>
          <Card title="Backend" icon={faServer} className={Styles.aboutCardRed}>
            <p className={`text textCenter`}>
              Expreience with developing web application backends featuring CRUD
              operations, database management and the best security and
              passwordless-authentication practices.
            </p>
            <h4 className={`heading headingVerySmall headingLight`}>
              My Backend Stack:
            </h4>
            <p className={`text textCenter textItalic`}>
              Node.JS, Express.JS, MongoDB via Mongoose, Passport.JS, Next.JS
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
