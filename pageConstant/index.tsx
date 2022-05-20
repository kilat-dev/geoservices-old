import { BreadcrumbMapProps } from "reusables/types";
import { generateBreadcrumb } from "reusables/utilities";
import { default as OIL_AND_GAS } from "./oil_and_gas";

export { default as HOME } from "./home";
export { default as ABOUT } from "./about";
export { default as CONTACT } from "./contact-us";
export { default as EVENT } from "./event";
export { default as LAB } from "./lab";
export { default as SEARCH } from "./search";
export { default as NEWS } from "./news";
export { default as OIL_AND_GAS } from "./oil_and_gas";
const thisBreadcrumb = [
  {
    title: "Home",
    url: "/",
  },
];

const breadcrumb: BreadcrumbMapProps = {
  "Oil and Gas": thisBreadcrumb,
  ...generateBreadcrumb(OIL_AND_GAS.breadcrumb, thisBreadcrumb),
};

export const getBreadcrumb = (key: string) => breadcrumb[key];
