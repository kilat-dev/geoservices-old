import OilAndGasLayout from "module/BasicLayout/OilAndGasLayout";
import CoreAnalysis from "module/CoreAnalysis";
import { PageType } from "module/types";
import { CORE_ANALYSIS as PAGE } from "pageConstant/oil_and_gas";
import imgBackground from "assets/bg-energyevolution.png";
import { getBreadcrumb } from "pageConstant";

const CoreAnalysisPage: PageType = CoreAnalysis;
CoreAnalysisPage.layout = OilAndGasLayout;
CoreAnalysisPage.title = PAGE.title;

export const getStaticProps = async () => {
  return {
    props: {
      text: "CORE ANALYSIS",
      backgroundImage: imgBackground?.src,
      breadcrumb: getBreadcrumb(PAGE.title),
    },
  };
};

export default CoreAnalysisPage;
