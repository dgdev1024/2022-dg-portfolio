/**
 * @file components/sections/projects.jsx
 */

import Link from "next/link";
import { getCategoryIcon } from "../../lib/category-icon";
import Card from "../card";
import Styles from "./projects.module.css";

export default ({ randomProjects }) => {
  return (
    <section className={`section ${Styles.projectsSection}`} id="projects">
      <div className={`sectionContainer ${Styles.projectsSectionContainer}`}>
        <h2 className={`heading headingCenter`}>My Projects</h2>
        <p className="text textItalic textCenter">
          Here are just a few randomly-selected projects of mine. Refresh the
          page or click on "See All Projects" to see more!
        </p>
        <Link href="/projects">
          <a className={`button ${Styles.projectsSeeAllButton}`}>
            See All Projects
          </a>
        </Link>
        <div className={Styles.projectsCardContainer}>
          {randomProjects.map((project, index) => (
            <Card
              icon={getCategoryIcon(project.category)}
              title={project.name}
              backgroundImage={project.image}
              key={index}
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
    </section>
  );
};
