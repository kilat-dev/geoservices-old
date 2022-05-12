import React from "react";
import imgBackground1 from "assets/bg-coal1.png";
import imgBackground2 from "assets/bg-coal2.png";
import imgBackground3 from "assets/bg-coal3.png";
import imgCart from "assets/cart2-vector.png";
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

const OurSpecialtySection = () => {
  return (
    <Container xl css={{ p: 0, overflow: "hidden" }}>
      {/* CARD TITLE */}
      <Row align="center" gap={4} css={{ my: "$6" }}>
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
          Our Specialties
        </Text>
      </Row>

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
            src={imgBackground1.src}
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
          }}
        >
          <Row align="center">
            <Image
              width={109}
              height={98}
              src={imgCart?.src}
              containerCss={{ m: 0 }}
            />
          </Row>

          <Row>
            <Text
              css={{
                mx: "$7",
                color: "#363C9A",
                fontFamily: "Inter",
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
                color: "#BDBDBD",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "24px",
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
              clickable
              shadow={false}
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
          }}
        >
          <Row align="center">
            <Image
              width={109}
              height={98}
              src={imgCart?.src}
              containerCss={{ m: 0 }}
            />
          </Row>

          <Row>
            <Text
              css={{
                mx: "$7",
                color: "#363C9A",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "19px",
                letterSpacing: "0.01em",
              }}
            >
              MNERAL LABORATORY
            </Text>
          </Row>
          <Spacer y={1} />

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
              Highly trained and experienced Indonesian staff perform all work
              in duplicate, in accordance with internationally accepted
              standards: ASTM, British Standard (BS), and International
              Standards (ISO), that was the Geoservices coal laboratory begin.
            </Text>
          </Row>

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
          </Row>
        </Col>
        <Col>
          <Image
            src={imgBackground2.src}
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
            src={imgBackground3.src}
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
          }}
        >
          <Row align="center">
            <Image
              width={109}
              height={98}
              src={imgCart?.src}
              containerCss={{ m: 0 }}
            />
          </Row>

          <Row>
            <Text
              css={{
                mx: "$7",
                color: "#363C9A",
                fontFamily: "Inter",
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
                color: "#BDBDBD",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "24px",
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
              clickable
              shadow={false}
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
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default OurSpecialtySection;
