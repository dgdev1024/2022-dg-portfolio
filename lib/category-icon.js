import {
  faLaptop,
  faServer,
  faGlobe,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

export const getCategoryIcon = (categoryString) => {
  switch (categoryString) {
    case "Frontend":
      return faLaptop;
    case "Backend":
      return faServer;
    case "Full Stack":
      return faGlobe;
    default:
      return faQuestion;
  }
};
