import Lab from "module/Lab";
import BasicLayout from "module/BasicLayout";
import { PageType } from "module/types";
import { LAB as PAGE } from "pageConstant";

const LabPage: PageType = Lab;
LabPage.layout = BasicLayout;
LabPage.title = PAGE.title;

export default LabPage;
