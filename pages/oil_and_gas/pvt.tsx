import BasicLayout from "module/BasicLayout";
import PVT from "module/PVT";
import { PageType } from "module/types";
import { PVT as PAGE } from "pageConstant/oil_and_gas";

const PVTPage: PageType = PVT;
PVTPage.layout = BasicLayout;
PVTPage.title = PAGE.title;

export default PVTPage;
