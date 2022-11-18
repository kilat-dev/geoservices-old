import PAGES from "pageConstant/oil_and_gas";

export const selectedColor = "#D3252C";
export const defaultColor = "#000000";
export const options = [
  {
    name: "exploration",
    label: "Exploration",
  },
  {
    name: "laboratory",
    label: "Lab",
  },
  {
    name: "software",
    label: "Software",
    url: PAGES.SOFTWARE.url
  },
  {
    name: "wellAndServices",
    label: "Well and Services",
  },
  {
    name: "training",
    label: "Training",
  },
];

export const laboratoryOptions = [
  {
    name: "topographicalServices",
    label: "Geolab",
    href: PAGES.GEOLAB.url,
  },
  {
    name: "geologicalServices",
    label: "Microbiology analysis",
    href: PAGES.PVT.url,
  },
  {
    name: "geophysicalServices",
    label: "Lab. of Gas Analysis",
    href: PAGES.GFE.url,
  },
];

export const explorationOptions = [
  {
    name: "topographicalServices",
    label: "Topographical Services",
    href: PAGES.CORE_ANALYSIS.url,
  },
  {
    name: "geologicalServices",
    label: "Geological Services",
    href: PAGES.PVT.url,
  },
  {
    name: "geophysicalServices",
    label: "Geophysical Services",
    href: PAGES.GFE.url,
  },
  {
    name: "geophysicalLoggingServices",
    label: "Geophysical Logging Services",
    href: "#", // stubs
  },
  {
    name: "coalBedMethane",
    label: "Coal Bed Methane",
    href: PAGES.ROCK_DESCRIPTION.url,
  },
];

export const softwareOptions = [
  {
    name: "emersonPradigm",
    label: "Emerson Pradigm",
    href: "#", // stubs
  },
  {
    name: "ikonScience",
    label: "Ikon Science",
    href: "#", // stubs
  },
  {
    name: "emersonRoxar",
    label: "Emerson Roxar",
    href: "#", // stubs
  },
  {
    name: "paleoScan",
    label: "Paleo Scan",
    href: "#", // stubs
  },
  {
    name: "kappa",
    label: "Kappa",
    href: "#", // stubs
  },
  {
    name: "petrosys",
    label: "Petrosys Data Management",
    href: "#", // stubs
  },
  {
    name: "petroleimExperts",
    label: "Petroleim Experts",
    href: "#", // stubs
  },
  {
    name: "tesseral",
    label: "Tesseral",
    href: "#", // stubs
  },
  {
    name: "neuralog",
    label: "Neuralog",
    href: "#", // stubs
  },
  {
    name: "etech",
    label: "E-tech",
    href: "#", // stubs
  },
];
