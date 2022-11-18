import React, { useState } from "react";
import Box from "reusables/Box";
import { Card, Image, Text, Col, Row } from "@nextui-org/react";
import TextLink from "reusables/TextLink";
import { companies, composeEmailLink, products } from "./constants";
import Slider from "react-slick";

const openLightbox = (setLightBoxStatus: Function, setContent: Function, image: string, email?: any) => () => {
    setContent({
        image,
        email: email ? email : {}
    });
    setLightBoxStatus(true);
};

const closeLightbox = (setLightBoxStatus: Function) => () => {
    setLightBoxStatus(false);
};

const renderLightbox = (
    isActive: boolean,
    setLightBoxStatus: Function,
    content: any
) => (
  <div style={{
      display: isActive ? 'block' : 'none',
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 999,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
  }}
    onClick={closeLightbox(setLightBoxStatus)}
  >
      <div style={{
          display: isActive ? 'block' : 'none',
          position: "absolute",
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
          width: 800,
          backgroundColor: 'white',
          padding: 20,
      }}>
          <button style={{
              color: 'white',
              background: 'none',
              border: 'none',
              fontSize: 21,
              position: 'absolute',
              top: -40,
              right: 0
          }}>
              x
          </button>
          {content.image && <img src={content.image} />}
          <div style={{
              marginTop: 20,
              color: 'gray'
          }}>
              Neuralog provides practical and intuitive solutions for the oil and gas industry. From scanning, digitizing and printing, to organizing and analyzing your data and getting answers about hydrocarbon reserves, each step of your workflow is supported with Neuralog Professional Solutions.
              <br />
              <br />
              Each Neuralog product contributes to your interpretation workflow. NeuraLog's automated digitizing tools set the industry standards for raster-to-vector conversion. NeuraMap calculates Volumetrics and Reserves for your digitized map; and also provides interactive map data capture tools. NeuraSection's powerful interpretation transforms logs, maps, and external data into custom cross sections and montages. NeuraScanner with NeuraView is a one-of-a-kind solution for capturing and storing valuable paper well logs.
              <br />
              <br />
              Logs can then be printed with the NeuraLaserColor high-speed log printer. Neuralog solutions are available to geoscience professionals around the world. Neuralog headquarters is located in Houston, Texas, the heartland of oil and gas.
              <br />
              <br />
              Neuralog also has direct representatives in North and South America and Europe. Neuralog products are used in Schlumberger/GeoQuest data conversion service centers worldwide and can be found in over 70 countries.
          </div>
          <a href={content.email ? composeEmailLink(content.email) : composeEmailLink({
              to: 'quotation@geoservices.com',
              subject: '',
              body: ''
          })} style={{
              color: 'white',
              backgroundColor: '#363C9A',
              border: 'none',
              fontSize: 15,
              padding: '12px 20px',
              marginTop: 20,
              display: 'inline-block'
          }}>
              Request Quotation
          </a>
      </div>
  </div>
);

const Software = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [isActive, setLightBoxStatus] = useState(false);
  const [content, setContent] = useState({});

  return (
      <>
          {renderLightbox(isActive, setLightBoxStatus, content)}
          <Box css={{ mb: "$40" }}>
              {/* Card #1 */}
              <Row
                  css={{
                      display: "grid",
                      gridAutoRows: "1fr",
                      gridTemplateColumns: "25% 1fr",
                      m: "$20 $0 $10 $0",
                      borderTop: "4px solid #E68E67",
                      boxShadow: "0px 4px 4px 0px #0000001A",
                      p: "44px 80px 44px 52px",
                  }}
              >
                  <Col span={4}>
                      <Text
                          css={{
                              fontWeight: "700",
                              fontSize: "20px",
                              lineHeight: "24px",
                              color: "#E68E67",
                          }}
                      >
                          Introduction
                      </Text>
                  </Col>
                  <Box>
                      <Text
                          css={{
                              fontWeight: "400",
                              fontSize: "20px",
                              lineHeight: 1.76,
                              color: "#828282",
                              textAlign: "right",
                          }}
                      >
                          PT GEOSERVICES also functions as a representative of software
                          companies whose products are being used by oil companies wordlwide.
                          Most of the products that we represent are standards of the energy
                          industry and we can attest from our own experience that they are
                          "benchmark" quality.
                      </Text>
                  </Box>
              </Row>
              {/* Card #2 */}
              <div>
                  <Text
                      css={{
                          fontWeight: "700",
                          fontSize: "20px",
                          lineHeight: "24px",
                          color: "$black",
                          marginTop: 80,
                          paddingBottom: 20
                      }}
                  >
                      Highlighted Products
                  </Text>
              </div>
              <Box
                  css={{
                      gridAutoRows: "1fr",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gridGap: "$10 $10",
                      my: "$10",
                      justifyItems: "center",
                  }}
              >
                  <Slider {...settings}>
                      {products?.map((item) => (
                          <div onClick={openLightbox(setLightBoxStatus, setContent, item.logo)}>
                              <Image src={item?.logo}/>
                              <div style={{
                                  marginTop: '10px',
                                  textAlign: 'center'
                              }}>
                                  {item.name}
                              </div>
                          </div>
                      ))}
                  </Slider>
              </Box>

              <div>
                  <Text
                      css={{
                          fontWeight: "700",
                          fontSize: "20px",
                          lineHeight: "24px",
                          color: "$black",
                          marginTop: 80,
                      }}
                  >
                      Principals
                  </Text>
              </div>
              <Box
                  css={{
                      display: "grid",
                      gridAutoRows: "1fr",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gridGap: "$10 $10",
                      my: "$10",
                      justifyItems: "center",
                  }}
              >
                  {companies?.map((item) => (
                      <Card key={item?.name} variant="bordered" css={{ borderRadius: 7 }}>
                          <Card.Body>
                              <Box
                                  css={{
                                      height: "100%",
                                      display: "grid",
                                      gridAutoColumns: "1fr",
                                      gridTemplateRows: "1fr auto",
                                  }}
                              >
                                  <Box css={{ display: "flex", alignItems: "center" }}>
                                      <Image src={item?.logo} />
                                  </Box>
                                  <div style={{
                                      textAlign: 'center',
                                      marginTop: 20,
                                      marginBottom: 40
                                  }}>
                                      {item.desc}
                                  </div>
                                  <Box
                                      css={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          mx: "$5",
                                          height: "100%",
                                          alignItems: "end",
                                      }}
                                  >
                                      <TextLink href={composeEmailLink(item?.email)} style={{
                                          color: '#505AE5'
                                      }}>
                                          Request Quotation
                                      </TextLink>
                                      <a onClick={openLightbox(setLightBoxStatus, setContent, item.logo, item.email)} style={{
                                          color: '#505AE5',
                                          cursor: 'pointer'
                                      }}>View Details</a>
                                  </Box>
                              </Box>
                          </Card.Body>
                      </Card>
                  ))}
              </Box>

              <div>
                  <Text
                      css={{
                          fontWeight: "700",
                          fontSize: "20px",
                          lineHeight: "24px",
                          color: "$black",
                          marginTop: 80,
                      }}
                  >
                      Other Products
                  </Text>
              </div>
              <Box
                  css={{
                      display: "grid",
                      gridAutoRows: "1fr",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gridGap: "$10 $10",
                      my: "$10",
                      justifyItems: "center",
                      paddingBottom: 60
                  }}
              >
                  {products?.map((item) => (
                      <div onClick={openLightbox(setLightBoxStatus, setContent, item.logo)}>
                      <Card
                          key={item?.name}
                          variant="bordered"
                          css={{ borderRadius: 0, borderWidth: 0 }}
                      >
                          <Card.Body>
                              <Box
                                  css={{
                                      height: "100%",
                                      display: "grid",
                                      gridAutoColumns: "1fr",
                                      gridTemplateRows: "1fr auto",
                                  }}
                              >
                                  <Box css={{ display: "flex", alignItems: "center" }}>
                                      <Image src={item?.logo} />
                                  </Box>
                                  <Box
                                      css={{
                                          marginTop: 12,
                                          textAlign: 'center'
                                      }}
                                  >
                                      {item.name}
                                  </Box>
                              </Box>
                          </Card.Body>
                      </Card>
                      </div>
                  ))}
              </Box>

              {/* Card #3 */}
              <Box
                  css={{
                      display: "grid",
                      gridAutoRows: "1fr",
                      gridTemplateColumns: "25% 1fr",
                      my: "$10",
                      borderTop: "4px solid #E68E67",
                      boxShadow: "0px 4px 4px 0px #0000001A",
                      p: "44px 193px 44px 52px",
                  }}
              >
                  <Box>
                      <Text
                          css={{
                              marginTop: "5px",
                              fontWeight: "700",
                              fontSize: "20px",
                              color: "#E68E67",
                          }}
                      >
                          Contact us for details
                      </Text>
                  </Box>
                  <Box>
                      <Text
                          css={{
                              fontWeight: "400",
                              fontSize: "20px",
                              lineHeight: 1.8,
                              color: "#828282",
                          }}
                      >
                          <b>Jakarta Office</b>
                          <br />
                          Jl. Minangkabau Barat No. 34, <br />
                          Jakarta, Indonesia <br />
                          Phone : (021) 830 5555, 831 8989 <br />
                          Fax : (021) 831 1454 <br />
                          Email : softwareteam@geoservices.co.id <br />
                      </Text>
                  </Box>
              </Box>
          </Box>
      </>
  );
};

export default Software;
