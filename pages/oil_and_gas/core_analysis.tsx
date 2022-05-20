import BasicLayout from "module/BasicLayout";
import CoreAnalysis from "module/CoreAnalysis";
import { PageType } from "module/types";
import { CORE_ANALYSIS as PAGE } from "pageConstant/oil_and_gas";

const CoreAnalysisPage: PageType = CoreAnalysis;
CoreAnalysisPage.layout = BasicLayout;
CoreAnalysisPage.title = PAGE.title;

export default CoreAnalysisPage;
