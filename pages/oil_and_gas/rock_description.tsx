import BasicLayout from "module/BasicLayout";
import RockDescription from "module/RockDescription";
import { PageType } from "module/types";
import { ROCK_DESCRIPTION as PAGE } from "pageConstant/oil_and_gas";

const RockDescriptionPage: PageType = RockDescription;
RockDescriptionPage.layout = BasicLayout;
RockDescriptionPage.title = PAGE.title;

export default RockDescriptionPage;
