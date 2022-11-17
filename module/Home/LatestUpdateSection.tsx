import React from "react";

import { Text, Container, Row, Spacer, Card } from "@nextui-org/react";
import { BsArrowRight } from "react-icons/bs";
import Box from "reusables/Box";

const LatestUpdateSection = () => {
  return (
    <>
      <Box css={{ my: "$20", maxWidth: '1240px', margin: '80px auto' }}>
        {/* TITLE */}
        <Row align="center" gap={4} css={{ mb: "$6" }}>
          <Box
            css={{ width: "56px", height: "3px", backgroundColor: "#363C9A" }}
          />
          <Text
            css={{
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "50px",
              lineHeight: "61px",
              color: "#E68E67",
            }}
          >
            Latest Update
          </Text>
        </Row>
        <Box
          css={{
            display: "grid",
            gridAutoColumns: "1fr",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {/* CARD 1 */}
          <Box css={{ mx: "$10" }}>
            <Card
              css={{
                height: "100%",
                backgroundColor: "#F8F8F8",
                boxShadow: "10px 10px #E0E0E0",
                p: "20px",
              }}
            >
              <Row css={{ pt: "$10" }}>
                <Text
                  css={{
                    color: "#363C9A",
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
                  isPressable
                  variant="flat"
                  css={{
                    width: "fit-content",
                    backgroundColor: "transparent",
                    p: "10px 10px 10px 10px",
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
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "20px",
                      }}
                    >
                      Watch
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                  </Container>
                </Card>
              </Row>
            </Card>
          </Box>

          {/* CARD 2 */}
          <Box css={{ mx: "$10" }}>
            <Card
              css={{
                height: "100%",
                backgroundColor: "#F8F8F8",
                boxShadow: "10px 10px #E0E0E0",
                p: "20px",
              }}
            >
              <Row css={{ pt: "$10" }}>
                <Text
                  css={{
                    color: "#363C9A",
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
                  isPressable
                  variant="flat"
                  css={{
                    width: "fit-content",
                    backgroundColor: "transparent",
                    p: "10px 10px 10px 10px",
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
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "20px",
                      }}
                    >
                      Read
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                  </Container>
                </Card>
              </Row>
            </Card>
          </Box>

          {/* CARD 3 */}
          <Box css={{ mx: "$10" }}>
            <Card
              css={{
                height: "100%",
                backgroundColor: "#F8F8F8",
                boxShadow: "10px 10px #E0E0E0",
                p: "20px",
              }}
            >
              <Row css={{ pt: "$10" }}>
                <Text
                  css={{
                    color: "#363C9A",
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
                  isPressable
                  variant="flat"
                  css={{
                    width: "fit-content",
                    backgroundColor: "transparent",
                    p: "10px 10px 10px 10px",
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
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "16px",
                        lineHeight: "20px",
                      }}
                    >
                      Watch
                    </Text>
                    <BsArrowRight color="#EC1C24" />
                  </Container>
                </Card>
              </Row>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LatestUpdateSection;
