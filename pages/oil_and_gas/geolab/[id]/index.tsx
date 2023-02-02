import { Image, Text, Container } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Box from "reusables/Box";
import { useRouter } from "next/router";
import Header from "../../../../module/BasicLayout/Header";
import ImageJumbotron from "../../../../reusables/ImageJumbotron";
import Footer from "../../../../module/BasicLayout/Footer";
import Modal from "../../../../reusables/Modal/Modal";
import BreadCrumbLine from "../../../../reusables/BreadcrumbLine";
import { breadcrumbData } from "./index.config";
import { API_KEY, API_BASE_URL } from "../../../../pageConstant/general";

const GeolabSub = () => {
  const router = useRouter();
  const [product, setProductData] = useState([]);
  const [openTab, chooseTab] = useState(1);
  const [isModalOpen, setModalStatus] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const callAPI = async (setProductData) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/geolabs?populate=deep`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
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

  const handleTab = (index) => () => {
    chooseTab(index);
  };

  const openProductDetail = (props) => () => {
    setModalStatus(true);
    setModalProps(props);
  };

  return (
    <>
      <Modal isModalOpen={isModalOpen} {...modalProps} />
      <Header />
      <ImageJumbotron
        imageSrc={`${API_BASE_URL}${banner}`}
        text={labTitle}
      />
      <Container css={{ my: "10px", maxWidth: "1240px" }}>
        <BreadCrumbLine items={breadcrumbData(labTitle)} />
        <h2 style={{ marginTop: 40 }}>Highlighted Products</h2>
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
                onClick={openProductDetail({
                  title: item.title,
                  desc: item.description,
                  cover: API_BASE_URL + item.thumbnail.data.attributes.url,
                  images: item.images.data,
                })}
                style={{ marginRight: 20 }}
              >
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
                  lineHeight: 1.5,
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
          <Box
            css={{
              position: "relative",
              marginTop: -79.5,
          }}>
            <Text
              css={{
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "24px",
                background: openTab === 1 ? "#E68E67" : "white",
                color: openTab === 1 ? "white" : "#E68E67",
                padding: "10px 20px",
                marginBottom: 20,
                display: "inline-block",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
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
                background: openTab === 2 ? "#E68E67" : "white",
                color: openTab === 2 ? "white" : "#E68E67",
                padding: "10px 20px",
                marginBottom: 20,
                marginLeft: 20,
                display: "inline-block",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
              onClick={handleTab(2)}
            >
              GENERAL INFORMATION
            </Text>
          </Box>
          <Box>
            {openTab === 1 && (
              <Text
                css={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "30px",
                color: "#828282",
                  whiteSpace: "pre-line",
                }}
                dangerouslySetInnerHTML={{ __html: data && data.Description }}
              ></Text>
            )}
            {openTab === 2 && (
              <Text
                css={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "30px",
                color: "#828282",
              }}
            >
              {data && data.Laboratory}
              </Text>
            )}
            {openTab === 2 && (
              <Text
                css={{
                  fontWeight: "400",
                fontSize: "16px",
                lineHeight: "30px",
                color: "#828282",
              }}
              >
                Industry : {data && data.Industry}
              </Text>
            )}
            {openTab === 2 && (
              <Text
                css={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "30px",
                color: "#828282",
                }}
            >
                Location : {data && data.Location}
              </Text>
            )}
          </Box>
        </Box>
        <h2>Other Geolab Laboratories</h2>
        <Box
          css={{
            marginTop: 30,
            marginBottom: 40,
            display: "flex",
          }}
        >
          {allData &&
            allData.slice(0, 5).map(
                (item, index) =>
                  index.toString() !== router.query.id && <div style={{
                      marginRight: 20,
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
                          lineHeight: 1.5,
                        }}>
                          {item.attributes.Laboratory}
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default GeolabSub;