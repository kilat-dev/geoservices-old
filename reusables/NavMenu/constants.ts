import PAGES from "pageConstant/oil_and_gas";

export const selectedColor = "#D3252C";
export const defaultColor = "#000000";
export const options = [
  {
    name: "exploration",
    label: "Exploration",
  },
  {
    name: "software",
    label: "Software",
  },
  {
    name: "training",
    label: "Training",
  },
  {
    name: "wellAndServices",
    label: "Well and Services",
  },
  {
    name: "laboratory",
    label: "Laboratory",
  },
];

export const explorationOptions = [
  {
    name: "coreAnalysis",
    label: "Core Analysis",
    href: PAGES.CORE_ANALYSIS.url,
  },
  {
    name: "pvt",
    label: "PVT Analysis",
    href: PAGES.PVT.url,
  },
  {
    name: "geochemistry",
    label: "Geochemistry",
    href: PAGES.GFE.url,
  },
  {
    name: "petroleumChemistry",
    label: "Petroleum Chemistry and Corrosion",
    href: "#", // stubs
  },
  {
    name: "rockDescription",
    label: "Rock Description",
    href: PAGES.ROCK_DESCRIPTION.url,
  },
  {
    name: "microbiologyAnalysis",
    label: "Microbiology Analysis",
    href: "#", // stubs
  },
  {
    name: "stratigraphicServices",
    label: "Stratigraphic Services",
    href: PAGES.STRATIGRAPGIC_SERVICES.url,
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
