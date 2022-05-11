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
// import Image from "next/image";
import TextLink from "components/TextLink";

const Sandbox = () => {
  return (
    <Container xl css={{ p: 0 }}>
      <Image
        src={imgBackground.src}
        objectFit="fill"
        height="834px"
        containerCss={{
          borderRadius: "0",
          linearGradient: `90.35deg, rgba(0, 0, 0, 0.608) 39.67%,
              rgba(0, 0, 0, 0) 90.6%, rgba(255, 255, 255, 0.435031) 90.6%`,
        }}
        css={{ zIndex: "-1", opacity: 0.8 }}
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
            gridTemplateColumns: "351px 526px",
          }}
          gap={1}
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
            <Text>View More</Text>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Sandbox;
