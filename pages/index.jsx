/**
 * @file pages/index.jsx
 *
 * @brief Presents the website's home page.
 */

import Head from "next/head";
import HeroSection from "../components/index-page/hero";
import AboutSection from "../components/index-page/about";
import ProjectsSection from "../components/index-page/projects";
import ContactSection from "../components/index-page/contact";

export default ({ randomProjects }) => (
  <>
    <Head>
      <title>Dennis Griffin - Web Developer and Designer</title>
      <link rel="shortcut icon" href="/images/favicon.ico" />
    </Head>
    <HeroSection />
    <AboutSection />
    <ProjectsSection randomProjects={randomProjects} />
    <ContactSection />
  </>
);

import { getRandomProjects } from "../lib/projects";

export async function getServerSideProps() {
  const randomProjects = getRandomProjects(4);
  return { props: { randomProjects } };
}
