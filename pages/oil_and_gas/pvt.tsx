import BasicLayout from "module/BasicLayout";
import PVT from "module/PVT";
import { PageType } from "module/types";
import { PVT as PAGE } from "pageConstant/oil_and_gas";
import imgBackground from "assets/bg-energyevolution.png";
import { getBreadcrumb } from "pageConstant";

const PVTPage: PageType = PVT;
PVTPage.layout = BasicLayout;
PVTPage.title = PAGE.title;

export const getStaticProps = async () => {
  return {
    props: {
      text: "CORE ANALYSIS",
      backgroundImage: imgBackground?.src,
      breadcrumb: getBreadcrumb(PAGE.title),
    },
  };
};

export default PVTPage;
