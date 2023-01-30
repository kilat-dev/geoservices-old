import { Image, Text, Container } from "@nextui-org/react";
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import Box from "reusables/Box";
import { useRouter } from 'next/router';
import Header from "../../../../module/BasicLayout/Header";
import ImageJumbotron from "../../../../reusables/ImageJumbotron";
import Footer from "../../../../module/BasicLayout/Footer";
import BreadCrumbLine from "../../../../reusables/BreadcrumbLine";

const GeolabSub = () => {
    const router = useRouter();
    const [product, setProductData] = useState([]);
    const [openTab, chooseTab] = useState(1);

    const apiToken =
        "2ec67e19c8e68e464b98e935cbc43d59ea77c11d983120eb3d234d097cd7aff18771692acaa390be0f09bae1a134c6205553c888c90a3a69687edc730d9e92106283f875b54b9530a41124eec5e7fa6410ba4685b12d5b879f2de1f4c87b280d1cf9f979b3b87a7f76fb8bed79acf4d8bf3ec2546666b60cd5c8c44619a79ad4";
    const callAPI = async (setProductData) => {
        try {
            const res = await fetch(`http://localhost:1337/api/geolabs?populate=deep`, {
                headers: {
                    Authorization: `Bearer ${apiToken}`,
                },
            });
            const data = await res.json();
            setProductData(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        callAPI(setProductData);
    }, []);

    const allData = product.data && product.data;
    const data = product.data && product.data[router.query.id].attributes;
    const images = data && data.products;
    const banner = data && data.Banner && data.Banner.data.attributes.url;
    const labTitle = data && data.Laboratory;
    const products = data && data.products;

    console.log(data && data.products);

    const breadcrumb = [
        {
            title: 'Home',
            url: 'oke',
            textColor: 'oke',
        },
        {
            title: 'Oil and Gas',
            url: 'oke',
            textColor: 'oke',
        },
        {
            title: 'Geolab',
            url: 'oke',
            textColor: 'oke',
        },
        {
            title: labTitle,
            url: '#',
            textColor: 'rgb(230, 142, 103)',
        }
    ]

    const handleTab = (index) => () => {
        chooseTab(index);
    }

    return (
        <>
            <Header />
            {banner && <ImageJumbotron
                imageSrc={"http://localhost:1337" + banner}
                text={labTitle}
                // objectPosition={jumbotronShift}
            />}
            <Container css={{ my: "10px", maxWidth: '1240px' }}>
                <BreadCrumbLine items={breadcrumb} />
                <h2 style={{
                    marginTop: 40
                }}>
                    Highlighted Products
                </h2>
                <Box
                    css={{
                        marginTop: 30,
                        display: "flex",
                    }}
                >
                    {images &&
                        images.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                marginRight: 20
                            }}>
                                <Image
                                    src={"http://localhost:1337" + item.thumbnail.data.attributes.url}
                                    width={280}
                                    height={160}
                                    objectFit={"cover"}
                                    style={{
                                        borderRadius: 12,
                                    }}
                                />
                                <div style={{
                                    fontSize: 15,
                                    marginTop: 12,
                                    maxWidth: 240,
                                    lineHeight: 1.5
                                }}>
                                    {item.title}
                                </div>
                            </div>
                        ))}
                </Box>

                <Box
                    css={{
                        marginTop: 120,
                        marginBottom: 100,
                        borderTop: "4px solid #E68E67",
                        boxShadow: "0px 4px 4px 0px #0000001A",
                        p: "44px 193px 44px 52px",
                    }}
                >
                    {/* first row */}
                    <Box css={{
                        position: 'relative',
                        marginTop: -79.5
                    }}>
                        <Text
                            css={{
                                fontWeight: "700",
                                fontSize: "16px",
                                lineHeight: "24px",
                                background: openTab === 1 ? "#E68E67" : 'white',
                                color: openTab === 1 ? 'white' : "#E68E67",
                                padding: '10px 20px',
                                marginBottom: 20,
                                display: 'inline-block',
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12
                            }}
                            onClick={handleTab(1)}
                        >
                            PRODUCT DESCRIPTION
                        </Text>
                        <Text
                            css={{
                                fontWeight: "700",
                                fontSize: "16px",
                                lineHeight: "24px",
                                background: openTab === 2 ? "#E68E67" : 'white',
                                color: openTab === 2 ? 'white' : "#E68E67",
                                padding: '10px 20px',
                                marginBottom: 20,
                                marginLeft: 20,
                                display: 'inline-block',
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12
                            }}
                            onClick={handleTab(2)}
                        >
                            GENERAL INFORMATION
                        </Text>
                    </Box>
                    <Box css={{}}>
                        {openTab === 1 && <Text
                            css={{
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "30px",
                                color: "#828282",
                                whiteSpace: "pre-line"
                            }}
                            dangerouslySetInnerHTML={{__html: data && data.Description}}
                        >
                        </Text>}
                        {openTab === 2 && <Text
                            css={{
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "30px",
                                color: "#828282",
                            }}
                        >
                            {data && data.Laboratory}
                        </Text>}
                        {openTab === 2 && <Text
                            css={{
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "30px",
                                color: "#828282",
                            }}
                        >
                            Industry : {data && data.Industry}
                        </Text>}
                        {openTab === 2 && <Text
                            css={{
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "30px",
                                color: "#828282",
                            }}
                        >
                            Location : {data && data.Location}
                        </Text>}
                        {openTab === 2 && <div style={{
                            marginTop: 40,
                            color: "#828282",
                            fontWeight: 600
                        }}>Product Contact Person:</div>}
                        {openTab === 2 && products &&
                            products.map((item, index) => (
                                <div key={index}>
                                    <Text style={{
                                        lineHeight: 1.5,
                                        marginTop: 12,
                                        color: "#828282",
                                    }}>
                                        {item.title}
                                    </Text>
                                    <Text>
                                        {item.contact_1}
                                    </Text>
                                    <Text>
                                        {item.contact_2}
                                    </Text>
                                </div>
                            ))}
                    </Box>
                </Box>
                <h2>
                    Other Geolab Laboratories
                </h2>
                <Box
                    css={{
                        marginTop: 30,
                        marginBottom: 40,
                        display: "flex",
                    }}
                >
                    {allData &&
                        allData.slice(0,5).map((item, index) => (
                            index.toString() !== router.query.id && <div style={{
                                marginRight: 20
                            }}>
                                <Link key={index + 'lab'} href={'/oil_and_gas/geolab/' + index}>
                                    <div>
                                        <Image
                                            src={"http://localhost:1337" + item.attributes.Banner.data.attributes.url}
                                            width={280}
                                            height={160}
                                            objectFit={"cover"}
                                            style={{
                                                borderRadius: 12,
                                            }}
                                        />
                                        <div style={{
                                            fontSize: 15,
                                            marginTop: 12,
                                            maxWidth: 240,
                                            lineHeight: 1.5
                                        }}>
                                            {item.attributes.Laboratory}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default GeolabSub;
