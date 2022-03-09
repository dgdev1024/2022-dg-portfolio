/**
 * @file components/layout.jsx
 *
 * @brief Presents the layout on each page.
 */

import Sidebar from "./sidebar";

export default ({ children }) => (
  <>
    <Sidebar />
    <main className="main">{children}</main>
  </>
);
