import React from "react";
import imgBackground from "assets/bg-energyevolution.png";
import imgCart from "assets/cart-vector.png";
import imgResearch from "assets/research-vector.png";
import imgSearch from "assets/search-vector.png";
import {
  Text,
  Container,
  Image,
  Row,
  Col,
  Spacer,
  Card,
} from "@nextui-org/react";
import { BsArrowRight } from "react-icons/bs";

const EnergyEvolutionSection = () => {
  return (
    <>
      <Row css={{ width: "100%", position: "relative" }}>
        <Image
          src={imgBackground.src}
          objectFit="fill"
          height="834px"
          containerCss={{
            width: "100%",
            borderRadius: "0",
            linearGradient: `90.35deg, rgba(0, 0, 0, 0.608) 39.67%,
              rgba(0, 0, 0, 0) 90.6%, rgba(255, 255, 255, 0.435031) 90.6%`,
          }}
          css={{ zIndex: "-1", opacity: 0.4 }}
        />
        <Container
          css={{
            position: "absolute",
            top: "0",
            left: "0",
          }}
        >
          <Row
            css={{
              position: "relative",
              paddingTop: "215px",
              paddingLeft: "120px",
              display: "grid",
              gridAutoRows: "1fr",
              gridTemplateColumns: "400px 526px",
            }}
            gap={2}
          >
            {/* left side */}
            <Col>
              <Text
                css={{
                  fontSize: "60px",
                  fontWeight: "800",
                  lineHeight: "76px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "$white",
                }}
              >
                The Energy Evolution
              </Text>

              <Spacer y={1} />
              <Card css={{ height: "3px", backgroundColor: "#D3252C" }} />
            </Col>

            {/* right side */}
            <Col
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingTop: "25px",
                height: "100%",
              }}
            >
              <Text
                css={{
                  top: "25px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "25px",
                  color: "#FFFFFF",
                }}
              >
                We have a solid base of expertise covering all aspects of the
                exploration and development of Indonesia’s oil, gas, coal,
                mineral, and geothermal industries.
              </Text>

              <Card
                clickable
                css={{
                  width: "fit-content",
                }}
              >
                <Container
                  css={{
                    width: "fit-content",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text css={{ mr: "$10" }}>View More</Text>
                  <BsArrowRight color="#EC1C24" />
                </Container>
              </Card>
            </Col>
          </Row>
        </Container>
      </Row>

      <Container css={{ top: "-150px", position: "relative" }}>
        <Row
          css={{
            display: "grid",
            gridAutoColumns: "1fr",
            gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
          }}
        >
          <Col>
            <Card
              shadow={false}
              css={{
                minHeight: "200px",
                borderRadius: "$lg 0px 0px $lg",
                overflow: "hidden",
              }}
            >
              <Container>
                <Row align="center">
                  <Col css={{ width: "fit-content" }}>
                    <Image
                      width={109}
                      height={98}
                      src={imgSearch?.src}
                      containerCss={{ m: 0 }}
                    />
                  </Col>
                  <Col>
                    <Text
                      css={{
                        color: "#363C9A",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "19px",
                        letterSpacing: "0.01em",
                      }}
                    >
                      SINCE 1971
                    </Text>
                  </Col>
                </Row>
                <Row>
                  <Text
                    css={{
                      color: "#BDBDBD",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "24px",
                      mx: "$7",
                    }}
                  >
                    Founded in 1971 to offer services to the mining industry, PT
                    Geoservices evolved into a fully integrated exploration
                    services company.
                  </Text>
                </Row>
              </Container>
            </Card>
          </Col>

          <Col css={{ height: "100%", backgroundColor: "$white" }}>
            <Container
              css={{
                my: "30px",
                p: 0,
                height: "100%",
                backgroundColor: "#E0E0E0",
              }}
            />
          </Col>

          <Col>
            <Card
              shadow={false}
              css={{
                minHeight: "200px",
                borderRadius: "0px 0px 0px 0px",
                overflow: "hidden",
              }}
            >
              <Container>
                <Row align="center">
                  <Col css={{ width: "fit-content" }}>
                    <Image
                      width={109}
                      height={98}
                      src={imgCart?.src}
                      containerCss={{ m: 0 }}
                    />
                  </Col>
                  <Col>
                    <Text
                      css={{
                        color: "#363C9A",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "19px",
                        letterSpacing: "0.01em",
                      }}
                    >
                      1500++ PEOPLE
                    </Text>
                  </Col>
                </Row>
                <Row>
                  <Text
                    css={{
                      color: "#BDBDBD",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "24px",
                      mx: "$7",
                    }}
                  >
                    Employing more than 1500 people, some of which are expert in
                    specialized fields from a number of foreign countries,
                  </Text>
                </Row>
              </Container>
            </Card>
          </Col>

          <Col css={{ height: "100%", backgroundColor: "$white" }}>
            <Container
              css={{
                my: "30px",
                p: 0,
                height: "100%",
                backgroundColor: "#E0E0E0",
              }}
            />
          </Col>

          <Col>
            <Card
              shadow={false}
              css={{
                minHeight: "200px",
                borderRadius: "0 $lg $lg 0",
                overflow: "hidden",
              }}
            >
              <Container>
                <Row align="center">
                  <Col css={{ width: "fit-content" }}>
                    <Image
                      width={109}
                      height={98}
                      src={imgResearch?.src}
                      containerCss={{ m: 0 }}
                    />
                  </Col>
                  <Col>
                    <Text
                      css={{
                        color: "#363C9A",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "19px",
                        letterSpacing: "0.01em",
                      }}
                    >
                      OUR FOCUS
                    </Text>
                  </Col>
                </Row>
                <Row>
                  <Text
                    css={{
                      color: "#BDBDBD",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "24px",
                      mx: "$7",
                    }}
                  >
                    Our specialties are mapping surveys, geology, geophysics,
                    downhole measurements, borehole drilling, laboratories
                    analysis, and cargo superintending
                  </Text>
                </Row>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EnergyEvolutionSection;
