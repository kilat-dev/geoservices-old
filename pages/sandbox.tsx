import React from "react";
import logo from "assets/logo1.png";
import { Row, Container } from "@nextui-org/react";
import Image from "next/image";
import TextLink from "components/TextLink";

const Sandbox = () => {
  return (
    <Row justify="space-between" align="center">
      <Container>
        <Image
          src={logo?.src}
          width="266px"
          height="63px"
          alt="logo"
          objectFit="initial"
        />
      </Container>

      <Container>
        <Row justify="flex-end" gap={1}>
          <TextLink fontSize="tiny" href="">
            Career
          </TextLink>
          <TextLink fontSize="tiny" href="">
            About Us
          </TextLink>
          <TextLink fontSize="tiny" href="">
            Contact
          </TextLink>
        </Row>
        <Row justify="flex-end" gap={1}>
          <TextLink href="">Oil and Gas</TextLink>
          <TextLink href="">Coal and Minerals</TextLink>
          <TextLink href="">Geothermal</TextLink>
          <TextLink href="">Trade and Services</TextLink>
        </Row>
      </Container>
    </Row>
  );
};

export default Sandbox;
