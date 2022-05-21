import BasicLayout from "module/BasicLayout";
import StratigraphicServices from "module/StratigraphicServices";
import { PageType } from "module/types";
import { STRATIGRAPGIC_SERVICES as PAGE } from "pageConstant/oil_and_gas";
import imgBackground from "assets/bg-energyevolution.png";
import { getBreadcrumb } from "pageConstant";

const StratigraphicServicesPage: PageType = StratigraphicServices;
StratigraphicServicesPage.layout = BasicLayout;
StratigraphicServicesPage.title = PAGE.title;

export const getStaticProps = async () => {
  return {
    props: {
      text: "CORE ANALYSIS",
      backgroundImage: imgBackground?.src,
      breadcrumb: getBreadcrumb(PAGE.title),
    },
  };
};

export default StratigraphicServicesPage;
