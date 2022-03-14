/**
 * @file pages/index.jsx
 *
 * @brief Presents the website's home page.
 */

import Head from "next/head";
import HomeSection from "../components/sections/home";
import AboutSection from "../components/sections/about";
import ProjectsSection from "../components/sections/projects";

export default ({ randomProjects }) => (
  <>
    <Head>
      <title>Dennis Griffin - Web Developer and Designer</title>
      <link rel="shortcut icon" href="/images/favicon.ico" />
    </Head>
    <HomeSection />
    <AboutSection />
    <ProjectsSection randomProjects={randomProjects} />
  </>
);

import { getRandomProjects } from "../lib/projects";

export async function getServerSideProps() {
  const randomProjects = getRandomProjects(4);
  return { props: { randomProjects } };
}
