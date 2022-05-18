import React from "react";

import {
  Text,
  Container,
  Row,
  Col,
  Spacer,
  Card,
  Image,
} from "@nextui-org/react";
import imgBackground from "assets/bg-training.png";
import { BsArrowRight } from "react-icons/bs";

const UpcomingTrainingSection = () => {
  return (
    <Row
      css={{
        width: "100%",
        position: "relative",
        background:
          "linear-gradient(75.36deg," +
          "rgba(54, 60, 154, 0.9) 68.15%, rgba(54, 60, 154, 0) 100%)",
      }}
    >
      <Image
        src={imgBackground.src}
        objectFit="fill"
        height="458px"
        containerCss={{
          width: "100%",
          borderRadius: "0",
        }}
        css={{ zIndex: "-1", opacity: 0.4 }}
      />
      <Container css={{ position: "absolute", top: 0 }}>
        {/* TITLE */}
        <Row justify="space-between" align="center">
          <Row align="center" gap={4} css={{ my: "$6" }}>
            <Card
              css={{ width: "56px", height: "3px", backgroundColor: "#F2F2F2" }}
            />
            <Text
              css={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: "50px",
                lineHeight: "61px",
                color: "#F2F2F2",
              }}
            >
              Upcoming Training
            </Text>
          </Row>

          <Card
            clickable
            css={{
              width: "200px",
              my: "$6",
            }}
          >
            <Container
              css={{
                p: 0,
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                flexFlow: "initial",
                alignItems: "center",
              }}
            >
              <Text css={{ mr: "$10" }}>View All</Text>
              <BsArrowRight color="#EC1C24" />
            </Container>
          </Card>
        </Row>

        <Row
          gap={2}
          css={{
            display: "grid",
            gridAutoColumns: "1fr",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {/* CARD 1 */}
          <Col css={{ height: "100%" }}>
            <Card css={{ backgroundColor: "transparent", height: "100%" }}>
              <Row css={{ pt: "$10" }}>
                <Text
                  css={{
                    color: "#F2F2F2",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "29px",
                  }}
                >
                  Konversi Batubara
                </Text>
              </Row>
              <Spacer y={1} />

              <Row>
                <Text
                  css={{
                    color: "#F2F2F2",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                  }}
                >
                  May 17 @ 8:00 am - May 18 @ 5:00 pm
                </Text>
              </Row>

              <Spacer y={2} />
              <Row align="flex-end" css={{ height: "100%" }}>
                <Card
                  clickable
                  shadow={false}
                  css={{
                    width: "fit-content",
                    backgroundColor: "transparent",
                  }}
                >
                  <Container
                    css={{
                      p: 0,
                      width: "fit-content",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      css={{
                        mr: "$10",
                        fontSize: "16px",
                        color: "#F2F2F2",
                      }}
                    >
                      Register
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                  </Container>
                </Card>
              </Row>
            </Card>
          </Col>

          {/* CARD 2 */}
          <Col css={{ height: "100%" }}>
            <Card css={{ backgroundColor: "transparent", height: "100%" }}>
              <Row css={{ pt: "$10" }}>
                <Text
                  css={{
                    color: "#F2F2F2",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "29px",
                  }}
                >
                  Jaminan Mutu Data Hasil Pengujian
                </Text>
              </Row>
              <Spacer y={1} />

              <Row>
                <Text
                  css={{
                    color: "#F2F2F2",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                  }}
                >
                  May 17 @ 8:00 am - May 18 @ 5:00 pm
                </Text>
              </Row>

              <Spacer y={2} />
              <Row align="flex-end" css={{ height: "100%" }}>
                <Card
                  clickable
                  shadow={false}
                  css={{
                    width: "fit-content",
                    backgroundColor: "transparent",
                  }}
                >
                  <Container
                    css={{
                      p: 0,
                      width: "fit-content",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      css={{
                        mr: "$10",
                        fontSize: "16px",
                        color: "#F2F2F2",
                      }}
                    >
                      Register
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                  </Container>
                </Card>
              </Row>
            </Card>
          </Col>

          {/* CARD 3 */}
          <Col css={{ height: "100%" }}>
            <Card css={{ backgroundColor: "transparent", height: "100%" }}>
              <Row css={{ pt: "$10" }}>
                <Text
                  css={{
                    color: "#F2F2F2",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "29px",
                  }}
                >
                  Geofisika untuk eksplorasi emas
                </Text>
              </Row>
              <Spacer y={1} />

              <Row>
                <Text
                  css={{
                    color: "#F2F2F2",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                  }}
                >
                  May 17 @ 8:00 am - May 18 @ 5:00 pm
                </Text>
              </Row>

              <Spacer y={2} />
              <Row align="flex-end" css={{ height: "100%" }}>
                <Card
                  clickable
                  shadow={false}
                  css={{
                    width: "fit-content",
                    backgroundColor: "transparent",
                  }}
                >
                  <Container
                    css={{
                      p: 0,
                      width: "fit-content",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      css={{
                        mr: "$10",
                        fontSize: "16px",
                        color: "#F2F2F2",
                      }}
                    >
                      Register
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                  </Container>
                </Card>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default UpcomingTrainingSection;
