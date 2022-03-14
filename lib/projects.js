import ProjectsList from "./projects-list.json";
import { getRandomInt } from "./random";

export const getRandomProjects = (count) => {
  if (count <= 0) {
    return [];
  }

  const allProjects = Object.keys(ProjectsList).reduce(
    (list, category) => [...list, ...ProjectsList[category].projects],
    []
  );

  const result = [];

  while (result.length < count) {
    const randomIndex = getRandomInt(0, allProjects.length - 1);
    const randomProject = allProjects[randomIndex];

    const findLoadedProject = result.findIndex(
      (project) => randomProject.name === project.name
    );
    if (findLoadedProject === -1) {
      result.push(randomProject);
    }
  }

  return result;
};

export const getProjectsByCategory = (categoryString) => {
  if (typeof categoryString !== "string" || categoryString === "") {
    return {
      description:
        "These are all of the projects I have done over the course of my web developer career.",
      projects: Object.keys(ProjectsList).reduce(
        (list, category) => [...list, ...ProjectsList[category].projects],
        []
      ),
    };
  }

  const projectCategory = ProjectsList[categoryString];
  if (typeof projectCategory === "undefined") {
    return { error: `Project category '${categoryString}' not found.` };
  }

  return projectCategory;
};

export const fetchProject = (category, index) => {
  const { error, projects } = getProjectsByCategory(category);
  if (error) {
    return { error };
  }

  if (typeof index !== "number" || isNaN(index)) {
    return { error: "The index given is not a number.", status: 400 };
  }

  if (index < 0) {
    index = Math.abs(index);
  }
  if (index >= projects.length) {
    return { error: "Project index out of range." };
  }

  return { project: projects[index] };
};
