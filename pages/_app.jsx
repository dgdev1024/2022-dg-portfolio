/**
 * @file pages/_app.jsx
 */

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Layout from "../components/layout";
import "../global-styles.css";

export default ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);
