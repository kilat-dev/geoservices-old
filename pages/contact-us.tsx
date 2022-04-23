import Contact from "module/Contact";
import BasicLayout from "module/BasicLayout";
import { PageType } from "module/types";
import { CONTACT as PAGE } from "pageConstant";

const ContactPage: PageType = Contact;
ContactPage.layout = BasicLayout;
ContactPage.title = PAGE.title;

export default ContactPage;
