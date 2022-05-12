import React from "react";
import logo from "assets/logo1.png";
import { Row, Container, Popover, Button, Input } from "@nextui-org/react";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import TextLink from "components/TextLink";
import Dot from "components/Dot";

const Header = () => {
  return (
    <Container
      xl
      css={{
        m: 0,
        p: 0,
        position: "fixed",
        zIndex: 2,
        background: "rgba(255, 255, 255, 0.8)",
      }}
    >
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

        <Row align="center">
          <Container>
            <Row justify="flex-end" align="center" gap={1}>
              <TextLink fontSize="tiny" href="">
                Career
              </TextLink>
              <Dot />
              <TextLink fontSize="tiny" href="">
                About Us
              </TextLink>
              <Dot />
              <TextLink fontSize="tiny" href="">
                Contact
              </TextLink>
            </Row>
            <Row justify="flex-end" align="center" gap={1}>
              <TextLink href="">Oil and Gas</TextLink>
              <TextLink href="">Coal and Minerals</TextLink>
              <TextLink href="">Geothermal</TextLink>
              <TextLink href="">Trade and Services</TextLink>
            </Row>
          </Container>

          <Popover placement="left">
            <Popover.Trigger>
              <Button auto light>
                <BiSearch />
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <Input placeholder="search" />
            </Popover.Content>
          </Popover>
        </Row>
      </Row>
    </Container>
  );
};

export default Header;
