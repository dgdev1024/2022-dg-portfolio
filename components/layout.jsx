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
    <p className="text textSmall textCenter" style={{ padding: "16px 0px" }}>
      Copyright &copy; 2018 - {new Date().getFullYear()} Dennis Griffin. All
      Rights Reserved.
    </p>
  </>
);
