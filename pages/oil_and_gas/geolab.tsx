import Geolab from "module/Geolab";
import { PageType } from "module/types";
import { GEOLAB as PAGE } from "pageConstant/oil_and_gas";
import { getBreadcrumb } from "pageConstant";
import OilAndGasLayout from "module/BasicLayout/OilAndGasLayout";

const GeolabPage: PageType = Geolab;
GeolabPage.layout = OilAndGasLayout;
GeolabPage.title = 'GEOLAB';

export const getStaticProps = async () => {
    const imgBackground = "/assets/geolab.png";

    return {
        props: {
            text: "Geolab",
            backgroundImage: imgBackground,
            // breadcrumb: getBreadcrumb('GEOLAB'),
        },
        revalidate: 10,
    };
};

export default GeolabPage;
