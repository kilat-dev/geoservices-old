import React from "react";
import { Container } from "@nextui-org/react";
import Header from "../../../module/BasicLayout/Header";
import ImageJumbotron from "../../../reusables/ImageJumbotron";
import BreadCrumbLine from "../../../reusables/BreadcrumbLine";
import Contact from "../../../reusables/Contact/Contact";
import Footer from "../../../module/BasicLayout/Footer";
import { useRouter } from "next/router";
import Tab from "../../../reusables/Tab/Tab";

const breadcrumbData = (title: string) => [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Coal and Minerals",
    url: "/coal",
  },
  {
    title,
    url: `/coal/{title}`,
    textColor: "rgb(230, 142, 103)",
  },
];

const tabItems = [
  {
    id: 1,
    title: "Introduction",
    key: "introduction",
    content: {
      data:
        "PT GEOSERVICES holds all necessary licenses to conduct cargo superintending within Indonesia and is a member of the Indonesian Association of Independent Surveyors (AISI). At present, this service is provided primarily for coal companies. PT GEOSERVICES is associated with several superintending companies worldwide. Among these are the Overseas Merchandise Inspection Corporation (OMIC) of Japan. PT GEOSERVICES maintains a pool of marine surveyors at its Jakarta office, while the Bandung laboratory sampling and analysis. Coal shipment and receival ports services are handled by these two offices for Java (e.g., Cirebon and Surabaya) and Sumatra (e.g., Tarahan, Padang, Kertapati, Bengkulu).\n" +
        "\n" +
        "Coal exported through East Kalimantan is served by the Samarinda and Balikpapan offices, each of which maintains a pool of qualified marine surveyors. Ports services include Tanjung Redeb, Bontang, Padang Bay, and Balikpapan, as well as the coal loading terminals at the mines along the Mahakam River.\n" +
        "\n" +
        "Banjarbaru services the coal export facilities in Banjarmasin (South Kalimantan). In additional, coal loaded at the North Pulau Laut Coal Terminal and from the Straits Resources mine on Pulau Sebuku is sampled and analyzed routinely, and certificates of weight are issued accordingly.\n" +
        "\n" +
        "The company’s Balikpapan office has developed a complete coal testing laboratory with the capability to carry out all analysis required for coal shipment. This enables certificates of analysis to be issued within three days after completion of loading for all vessels departing East Kalimantan.\n" +
        "\n" +
        "Senior marine surveyors at each site have a minimum of five years sea-going experience as well as qualifications from a recognized school of marine surveying. Sampling and analysis at all locations are conducted in accordance with the shipper’s instructions, following the code of standard practice nominated by the client. British standards, International Standards (ISO), and ASTM methods are available options. Copies of all relevant standards are kept at each office of operations.\n" +
        "\n" +
        "All laboratory equipment is routinely calibrated. The quality of each laboratory’s analysis results is monitored by the use of certified reference materials, daily control sample analysis, and participation in “round robin” check analysis programs.\n" +
        "\n",
    },
  },
  {
    id: 2,
    title: "Services",
    key: "services",
    content: {
      data: [
        {
          id: 1,
          title: "Draft survey",
          content:
            "Static Formation Temperature Testing\n" +
            "Water Loss Testing\n" +
            "Injectivity Testing\n" +
            "Pressure Fall-off Testing\n" +
            "Pressure Build-up Testing\n" +
            "Pressure and Temperature Monitoring during heating-up periods\n" +
            "Pressure and Temperature Monitoring while flowing",
        },
        {
          id: 2,
          title: "On Hire/Off Hire surveys of vessels",
          content:
            "Flow Rate Measurement\n" +
            "Enthalpy Measurement\n" +
            "Pressure Build-up Testing\n" +
            "Gas, Water, & Condensate\n" +
            "Water and Gas Analysis\n" +
            "Sampling (field and laboratory)",
        },
        {
          id: 3,
          title: "Towing survey and inspection",
          content: "Operation of Mechanical Downhole Equipment",
        },
        {
          id: 4,
          title: "Hold Cleanliness",
          content:
            "Installation\n" +
            "Cleaning and Inspection\n" +
            "Routine Maintenance\n" +
            "Nitrogen Purging\n" +
            "Pressure Testing",
        },
        {
          id: 5,
          title: "Tightness inspection",
          content: "Safety and H2S",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Remote Locations",
    key: "remote",
    content: {
      data: "Many Indonesian coal mining activities are situated in areas remote from centers of population and therefore lack proper infrastructure. This necessitates the temporary establishment of either mine-site or port-site laboratories. Such laboratories are required to be independent in order to supply cargo superintending services and they must be operated under contract.\n" +
          "\n" +
          "Under these circumstances it is economical to combine the provision of cargo superintending services and quality control. PT. GEOSERVICES has successfully operated at remote locations by using equipment that is either sold or leased to the mining company.\n" +
          "\n" +
          "In cases where marine services can be conveniently supplied from an established site, staff can be sent to operate mine-site quality control laboratories. They can also train the colliery staff so that the long-term operation of the laboratory becomes the responsibility of the mine owner."
    },
  },
];

const CoalDetail = () => {
  const { query } = useRouter();
  const title = query.id ? query.id.replaceAll("_", " ") : "";

  return (
    <div>
      <Header />
      <ImageJumbotron
        imageSrc={
          "https://strapi-g3gp.onrender.com/uploads/overlay_d705da266e.png"
        }
        text={title}
      />
      <Container css={{ my: "10px", maxWidth: "1240px" }}>
        <BreadCrumbLine items={breadcrumbData(title)} />
        <Tab tabItems={tabItems} />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
};

export default CoalDetail;
