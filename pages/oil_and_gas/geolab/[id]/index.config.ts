export const breadcrumbData = (labTitle: string) => [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Oil and Gas",
    url: "/oil_and_gas",
  },
  {
    title: "Geolab",
    url: "/oil_and_gas/geolab",
  },
  {
    title: labTitle,
    url: "#",
    textColor: "rgb(230, 142, 103)",
  },
];
