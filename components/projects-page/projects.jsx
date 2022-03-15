/**
 * @file components/projects-page/projects.jsx
 */

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getCategoryIcon } from "../../lib/category-icon";
import Card from "../card";
import Styles from "./projects.module.css";

export default ({ projects, lastPage }) => {
  return (
    <section className={`section ${Styles.projectsSection}`}>
      <div className={`sectionContainer ${Styles.projectsSectionContainer}`}>
        <div className={Styles.projectsCardsContainer}>
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.name}
              backgroundImage={project.image}
              icon={getCategoryIcon(project.category)}
              className={Styles.projectCard}
            >
              <p className="text textCenter">{project.description}</p>
              <p className="text textCenter textItalic">
                <strong>Stack:</strong> {project.technologies.join(", ")}
                <br />
                <strong>Category:</strong> {project.category}
              </p>
              {project.pageUrl && (
                <a
                  className={`button ${Styles.projectsCardButton}`}
                  href={project.pageUrl}
                  target="_blank"
                >
                  Visit Page
                </a>
              )}
              {project.githubUrl && (
                <a
                  className={`button ${Styles.projectsCardButton}`}
                  href={project.githubUrl}
                  target="_blank"
                >
                  View on Github
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
      {lastPage === false && <Fa icon={faSpinner} />}
    </section>
  );
};
