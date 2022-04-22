import About from "module/About";
import BasicLayout from "module/BasicLayout";
import { PageType } from "pages/types";
import { ABOUT as PAGE } from "pageConstant";

const AboutPage: PageType = About;
AboutPage.layout = BasicLayout;
AboutPage.title = PAGE.title;

export default AboutPage;
