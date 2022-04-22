import Event from "module/Event";
import BasicLayout from "module/BasicLayout";
import { PageType } from "pages/types";
import { EVENT as PAGE } from "pageConstant";

const EventPage: PageType = Event;
EventPage.layout = BasicLayout;
EventPage.title = PAGE.title;

export default EventPage;
