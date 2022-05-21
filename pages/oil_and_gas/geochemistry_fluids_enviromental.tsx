import GFS from "module/GeochemistryFluidsEnviromental";
import BasicLayout from "module/BasicLayout";
import { PageType } from "module/types";
import { GFE as PAGE } from "pageConstant/oil_and_gas";
import imgBackground from "assets/bg-energyevolution.png";
import { getBreadcrumb } from "pageConstant";

const GFSPage: PageType = GFS;
GFSPage.layout = BasicLayout;
GFSPage.title = PAGE.title;

export const getStaticProps = async () => {
  return {
    props: {
      text: "CORE ANALYSIS",
      backgroundImage: imgBackground?.src,
      breadcrumb: getBreadcrumb(PAGE.title),
    },
  };
};

export default GFSPage;
