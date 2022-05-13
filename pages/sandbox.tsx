import React from "react";
import logo from "assets/logo1.png";
import { Container, Row, Spacer, Text } from "@nextui-org/react";
import Image from "next/image";

const Footer = () => {
  return (
    <Row
      css={{
        my: "$10",
        display: "grid",
        gridAutoRows: "1fr",
        gridTemplateColumns: "50% 1fr 1fr",
      }}
    >
      <Row
        css={{
          width: "fit-content",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src={logo?.src}
          width="266px"
          height="63px"
          alt="logo"
          objectFit="initial"
        />
        <Text
          css={{
            fontFamily: "Plus Jakarta Sans",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "20px",
          }}
        >
          Copyright © 2022 - PT Geoservices
        </Text>
      </Row>

      <Container>
        <Text css={{ fontSize: "16px", color: "#000000" }}>Jakarta Office</Text>
        <Spacer y={1} />
        <Text css={{ fontSize: "16px", color: "#828282" }}>
          Jl. Minangkabau Barat No. 34,
        </Text>
        <Text css={{ fontSize: "16px", color: "#828282" }}>
          {" "}
          Jakarta, Indonesia
        </Text>
        <Text css={{ fontSize: "16px", color: "#828282" }}>
          Phone : (021) 830 5555, 831 8989
        </Text>
        <Text css={{ fontSize: "16px", color: "#828282" }}>
          Fax : (021) 831 1454
        </Text>
        <Text css={{ fontSize: "16px", color: "#828282" }}>
          Email : jktbranch@geoservices.co.id
        </Text>
      </Container>

      <Container>
        <Text css={{ fontSize: "16px", color: "#000000" }}>Bandung Office</Text>
        <Spacer y={1} />
        <Text css={{ fontSize: "16px", color: "#828282" }}>
          Jl. Setiabudhi No. 81,
        </Text>
        <Text css={{ fontSize: "16px", color: "#828282" }}>
          {" "}
          Bandung, Jawa Barat, Indonesia
        </Text>
        <Text css={{ fontSize: "16px", color: "#828282" }}>
          Phone : (022) 203 1316, 203 5436
        </Text>
        <Text css={{ fontSize: "16px", color: "#828282" }}>
          Fax : (022) 203 8090
        </Text>
        <Text css={{ fontSize: "16px", color: "#828282" }}>
          Email : bdgoff@geoservices.co.id
        </Text>
      </Container>
    </Row>
  );
};

export default Footer;
