import BasicLayout from "module/BasicLayout";
import RockDescription from "module/RockDescription";
import { PageType } from "module/types";
import { ROCK_DESCRIPTION as PAGE } from "pageConstant/oil_and_gas";
import imgBackground from "assets/bg-energyevolution.png";
import { getBreadcrumb } from "pageConstant";

const RockDescriptionPage: PageType = RockDescription;
RockDescriptionPage.layout = BasicLayout;
RockDescriptionPage.title = PAGE.title;

export const getStaticProps = async () => {
  return {
    props: {
      text: "CORE ANALYSIS",
      backgroundImage: imgBackground?.src,
      breadcrumb: getBreadcrumb(PAGE.title),
    },
  };
};

export default RockDescriptionPage;
