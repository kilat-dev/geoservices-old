import BasicLayout from "module/BasicLayout";
import StratigraphicServices from "module/StratigraphicServices";
import { PageType } from "module/types";
import { STRATIGRAPGIC_SERVICES as PAGE } from "pageConstant/oil_and_gas";

const StratigraphicServicesPage: PageType = StratigraphicServices;
StratigraphicServicesPage.layout = BasicLayout;
StratigraphicServicesPage.title = PAGE.title;

export default StratigraphicServicesPage;
