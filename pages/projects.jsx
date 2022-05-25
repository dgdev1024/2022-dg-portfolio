/**
 * @file pages/projects.jsx
 */

import Head from "next/head";
import {
  faGlobe,
  faDollarSign,
  faClockRotateLeft,
  faLaptop,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import { getProjectsByCategory } from "../lib/projects";
import HeroSection from "../components/projects-page/hero";
import ProjectsSection from "../components/projects-page/projects";

const projectCategories = [
  { id: "", icon: faGlobe },
  { id: "clients", icon: faDollarSign },
  { id: "free-code-camp", icon: faFreeCodeCamp },
  { id: "frontend-mentor", icon: faLaptop },
  { id: "other-exercises", icon: faCode },
  { id: "legacy-projects", icon: faClockRotateLeft },
];

export default () => {
  const [projectData, setProjectData] = useState({
    title: "",
    icon: faGlobe,
    description: "",
    projects: [],
  });
  const [currentCategory, setCurrentCategory] = useState(0);

  useEffect(() => {
    const newProjectData = getProjectsByCategory(
      projectCategories[currentCategory].id
    );

    setProjectData({
      title: newProjectData.title,
      icon: projectCategories[currentCategory].icon,
      description: newProjectData.description,
      projects: newProjectData.projects,
    });
  }, [currentCategory]);

  const nextCategory = () => {
    if (currentCategory === projectCategories.length - 1) {
      setCurrentCategory(0);
    } else {
      setCurrentCategory((cat) => cat + 1);
    }
  };

  const prevCategory = () => {
    if (currentCategory === 0) {
      setCurrentCategory(projectCategories.length - 1);
    } else {
      setCurrentCategory((cat) => cat - 1);
    }
  };

  return (
    <>
      <Head>
        <title>Projects | Dennis Griffin - Web Developer and Designer</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <HeroSection
        heroIcon={projectCategories[currentCategory].icon}
        heroTitle={projectData && projectData.title}
        heroDescription={projectData && projectData.description}
        nextCategory={nextCategory}
        prevCategory={prevCategory}
      />
      <ProjectsSection projects={projectData && projectData.projects} />
    </>
  );
};
