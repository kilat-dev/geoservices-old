import Home from "./module/Home";
import BasicLayout from "./module/BasicLayout";
import { PageType } from "./types";

const HomePage: PageType = Home;
HomePage.layout = BasicLayout;

export default HomePage;
