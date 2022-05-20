import GFS from "module/GeochemistryFluidsEnviromental";
import BasicLayout from "module/BasicLayout";
import { PageType } from "module/types";
import { GFE as PAGE } from "pageConstant/oil_and_gas";

const GFSPage: PageType = GFS;
GFSPage.layout = BasicLayout;
GFSPage.title = PAGE.title;

export default GFSPage;
