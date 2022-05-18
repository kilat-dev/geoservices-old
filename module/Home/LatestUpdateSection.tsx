import React from "react";

import { Text, Container, Row, Col, Spacer, Card } from "@nextui-org/react";
import { BsArrowRight } from "react-icons/bs";

const LatestUpdateSection = () => {
  return (
    <>
      <Container css={{ my: "$20" }}>
        {/* TITLE */}
        <Row align="center" gap={4} css={{ mb: "$6" }}>
          <Card
            css={{ width: "56px", height: "3px", backgroundColor: "#363C9A" }}
          />
          <Text
            css={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "50px",
              lineHeight: "61px",
              color: "#BDBDBD",
            }}
          >
            Latest Update
          </Text>
        </Row>
        <Row gap={2}>
          {/* CARD 1 */}
          <Col>
            <Card>
              <Row css={{ pt: "$10" }}>
                <Text
                  css={{
                    color: "#363C9A",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "18px",
                  }}
                >
                  Video
                </Text>
              </Row>
              <Spacer y={1} />

              <Row>
                <Text
                  css={{
                    color: "#000000",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "32px",
                    lineHeight: "39px",
                  }}
                >
                  Sludge Oil Liquefaction System (Sols) With Paralax(R)
                </Text>
              </Row>

              <Spacer y={2} />
              <Row align="flex-end" css={{ height: "100%" }}>
                <Card
                  clickable
                  shadow={false}
                  css={{
                    width: "fit-content",
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
                    <Text css={{ mr: "$10", fontSize: "16px" }}>Watch</Text>
                    <BsArrowRight color="#EC1C24" />
                  </Container>
                </Card>
              </Row>
            </Card>
          </Col>

          {/* CARD 2 */}
          <Col>
            <Card>
              <Row css={{ pt: "$10" }}>
                <Text
                  css={{
                    color: "#363C9A",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "18px",
                  }}
                >
                  Event
                </Text>
              </Row>
              <Spacer y={1} />

              <Row>
                <Text
                  css={{
                    color: "#000000",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "32px",
                    lineHeight: "39px",
                  }}
                >
                  Webinar Series With Theme ” The Age of Digital Transformation”
                  Part 2
                </Text>
              </Row>

              <Spacer y={2} />
              <Row align="flex-end" css={{ height: "100%" }}>
                <Card
                  clickable
                  shadow={false}
                  css={{
                    width: "fit-content",
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
                    <Text css={{ mr: "$10", fontSize: "16px" }}>Read</Text>
                    <BsArrowRight color="#EC1C24" />
                  </Container>
                </Card>
              </Row>
            </Card>
          </Col>

          {/* CARD 3 */}
          <Col>
            <Card>
              <Row css={{ pt: "$10" }}>
                <Text
                  css={{
                    color: "#363C9A",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "18px",
                  }}
                >
                  Video
                </Text>
              </Row>
              <Spacer y={1} />

              <Row>
                <Text
                  css={{
                    color: "#000000",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "32px",
                    lineHeight: "39px",
                  }}
                >
                  Sludge Oil Liquefaction System (Sols) With Paralax(R)
                </Text>
              </Row>

              <Spacer y={2} />
              <Row align="flex-end" css={{ height: "100%" }}>
                <Card
                  clickable
                  shadow={false}
                  css={{
                    width: "fit-content",
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
                    <Text css={{ mr: "$10", fontSize: "16px" }}>Watch</Text>
                    <BsArrowRight color="#EC1C24" />
                  </Container>
                </Card>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LatestUpdateSection;
