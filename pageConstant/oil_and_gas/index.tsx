import { default as CORE_ANALYSIS } from "./core_analysis";
import { default as GFE } from "./geochemistry_fluids_enviromental";
import { default as ROCK_DESCRIPTION } from "./rock_description";
import { default as STRATIGRAPGIC_SERVICES } from "./stratigraphic_services";
import { default as PVT } from "./pvt";

export { default as CORE_ANALYSIS } from "./core_analysis";
export { default as GFE } from "./geochemistry_fluids_enviromental";
export { default as ROCK_DESCRIPTION } from "./rock_description";
export { default as STRATIGRAPGIC_SERVICES } from "./stratigraphic_services";
export { default as PVT } from "./pvt";

export default {
  title: "Oil and Gas",
  url: "/oil_and_gas",
  CORE_ANALYSIS,
  GFE,
  ROCK_DESCRIPTION,
  STRATIGRAPGIC_SERVICES,
  PVT,
};
