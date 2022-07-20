import React from "react";
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
import Box from "reusables/Box";

const OurSpecialtySection = () => {
  const imgBackground1 = "/assets/bg-coal1.png";
  const imgBackground2 = "/assets/bg-coal2.png";
  const imgBackground3 = "/assets/bg-coal3.png";
  const imgCart = "/assets/cart2-vector.png";

  return (
    <Container xl css={{ p: 0, overflow: "hidden" }}>
      {/* CARD TITLE */}
      <Container css={{ maxWidth: "1240px" }}>
        <Row align="center" gap={4} css={{ my: "$6" }}>
          <Box
            css={{ width: "56px", height: "3px", backgroundColor: "#363C9A" }}
          />
          <Text
            css={{
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "50px",
              lineHeight: "61px",
              color: "#BDBDBD",
            }}
          >
            Our Specialties
          </Text>
        </Row>
      </Container>

      {/* CARD 1 */}
      <Row
        css={{
          display: "grid",
          gridAutoRows: "1fr",
          gridTemplateColumns: "55% 1fr",
        }}
      >
        <Col>
          <Image
            src={imgBackground1}
            objectFit="contain"
            containerCss={{
              borderRadius: "0",
            }}
          />
        </Col>
        <Col
          css={{
            p: "$10",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: 'whitesmoke'
          }}
        >
          <Row align="center">
            <Image
              width={109}
              height={98}
              src={imgCart}
              containerCss={{ m: 0 }}
            />
          </Row>

          <Row>
            <Text
              css={{
                mx: "$7",
                color: "#363C9A",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "19px",
                letterSpacing: "0.01em",
              }}
            >
              COAL LABORATORY
            </Text>
          </Row>
          <Spacer y={1} />

          <Row>
            <Text
              css={{
                color: "#828282",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: 1.5,
                  maxWidth: '420px',
                mx: "$7",
              }}
            >
              Highly trained and experienced Indonesian staff perform all work
              in duplicate, in accordance with internationally accepted
              standards: ASTM, British Standard (BS), and International
              Standards (ISO), that was the Geoservices coal laboratory begin.
            </Text>
          </Row>

          <Row align="flex-end" css={{ height: "100%" }}>
            <Card
              isPressable
              variant="flat"
              css={{
                width: "fit-content",
                backgroundColor: "white",
              }}
            >
              <Container
                css={{
                  width: "fit-content",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  p: "10px 10px 10px 10px",
                    backgroundColor: 'whitesmoke'
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
                  View More
                </Text>
                <BsArrowRight color="#EC1C24" />
              </Container>
            </Card>
          </Row>
        </Col>
      </Row>

      {/* CARD 2 */}
      <Row
        css={{
          display: "grid",
          gridAutoRows: "1fr",
          gridTemplateColumns: "1fr 55%",
        }}
      >
        <Col
          css={{
            p: "$10",
            height: "100%",
            display: "flex",
            flexDirection: "column",
              backgroundColor: 'whitesmoke',
              paddingLeft: '120px'
          }}
        >
          <Row align="center">
            <Image
              width={109}
              height={98}
              src={imgCart}
              containerCss={{ m: 0 }}
            />
          </Row>

          <Row>
            <Text
              css={{
                mx: "$7",
                color: "#363C9A",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "19px",
                letterSpacing: "0.01em",
              }}
            >
              MINERAL LABORATORY
            </Text>
          </Row>
          <Spacer y={1} />

          <Row>
            <Text
              css={{
                color: "#828282",
                  maxWidth: '420px',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: 1.5,
                mx: "$7",
              }}
            >
              Highly trained and experienced Indonesian staff perform all work
              in duplicate, in accordance with internationally accepted
              standards: ASTM, British Standard (BS), and International
              Standards (ISO), that was the Geoservices coal laboratory begin.
            </Text>
          </Row>

          <Row align="flex-end" css={{ height: "100%" }}>
            <Card
              isPressable
              variant="flat"
              css={{
                width: "fit-content",
                backgroundColor: "white",
              }}
            >
              <Container
                css={{
                  width: "fit-content",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  p: "10px 10px 10px 10px",
                    backgroundColor: 'whitesmoke'
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
                  View More
                </Text>
                <BsArrowRight color="#EC1C24" />
              </Container>
            </Card>
          </Row>
        </Col>
        <Col>
          <Image
            src={imgBackground2}
            objectFit="contain"
            containerCss={{
              borderRadius: "0",
            }}
          />
        </Col>
      </Row>

      {/* CARD 3 */}
      <Row
        css={{
          display: "grid",
          gridAutoRows: "1fr",
          gridTemplateColumns: "55% 1fr",
        }}
      >
        <Col>
          <Image
            src={imgBackground3}
            objectFit="contain"
            containerCss={{
              borderRadius: "0",
            }}
          />
        </Col>
        <Col
          css={{
            p: "$10",
            height: "100%",
            display: "flex",
            flexDirection: "column",
              backgroundColor: 'whitesmoke'
          }}
        >
          <Row align="center">
            <Image
              width={109}
              height={98}
              src={imgCart}
              containerCss={{ m: 0 }}
            />
          </Row>

          <Row>
            <Text
              css={{
                mx: "$7",
                color: "#363C9A",

                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "19px",
                letterSpacing: "0.01em",
              }}
            >
              GEOTHERMAL
            </Text>
          </Row>
          <Spacer y={1} />

          <Row>
            <Text
              css={{
                color: "#828282",

                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: 1.5,
                mx: "$7",
                  maxWidth: '420px'
              }}
            >
              Highly trained and experienced Indonesian staff perform all work
              in duplicate, in accordance with internationally accepted
              standards: ASTM, British Standard (BS), and International
              Standards (ISO), that was the Geoservices coal laboratory begin.
            </Text>
          </Row>

          <Row align="flex-end" css={{ height: "100%" }}>
            <Card
              isPressable
              variant="flat"
              css={{
                width: "fit-content",
                backgroundColor: "white",
              }}
            >
              <Container
                css={{
                  width: "fit-content",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  p: "10px 10px 10px 10px",
                    backgroundColor: 'whitesmoke'
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
                  View More
                </Text>
                <BsArrowRight color="#EC1C24" />
              </Container>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default OurSpecialtySection;
