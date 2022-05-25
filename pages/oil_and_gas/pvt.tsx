import PVT from "module/PVT";
import { PageType } from "module/types";
import { PVT as PAGE } from "pageConstant/oil_and_gas";
import { getBreadcrumb } from "pageConstant";
import OilAndGasLayout from "module/BasicLayout/OilAndGasLayout";

const PVTPage: PageType = PVT;
PVTPage.layout = OilAndGasLayout;
PVTPage.title = PAGE.title;

export const getStaticProps = async () => {
  return {
    props: {
      text: "CORE ANALYSIS",
      backgroundImage: "/assets/bg-mine1.png",
      breadcrumb: getBreadcrumb(PAGE.title),
    },
    revalidate: 10,
  };
};

export default PVTPage;
