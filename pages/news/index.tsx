import News from "module/News/NewsList";
import BasicLayout from "module/BasicLayout";
import { PageType } from "module/types";
import { default as PAGE } from "pageConstant/news";

const NewsPage: PageType = News;
NewsPage.layout = BasicLayout;
NewsPage.title = PAGE.title;

export default NewsPage;
