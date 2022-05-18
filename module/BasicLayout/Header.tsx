import React, { useState } from "react";
import logo from "assets/logo1.png";
import { Row, Container, Button, Input } from "@nextui-org/react";
import { BiSearch } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import Image from "next/image";
import TextLink from "components/TextLink";
import Dot from "components/Dot";
import Box from "components/Box";

const Header = () => {
  const [isExpand, setExpand] = useState(false);
  const [searchKey, setSearchKey] = useState("");

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
      <Row
        justify="space-between"
        align="center"
        css={{ position: "relative", height: "100%" }}
      >
        <Box
          css={{
            width: `${isExpand ? "100%" : "0px"}`,
            height: "100%",
            transition: "width 0.5s",
            position: "absolute",
            zIndex: 5,
            left: `${isExpand ? "0" : "-100px"}`,
            background: "rgba(255, 255, 255)",
            display: "flex",
            alignContent: "center",
            p: "$5",
          }}
        >
          <Input
            width="100%"
            placeholder="search"
            value={searchKey}
            onChange={(e) => setSearchKey(e?.target?.value)}
            contentRight={
              <Button
                auto
                light
                onPress={() => {
                  setExpand(false);
                  setSearchKey("");
                }}
                css={{ right: "$10" }}
              >
                <ImCancelCircle />
              </Button>
            }
          />
        </Box>

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

          <Button
            auto
            onPress={() => {
              setExpand(true);
            }}
            css={{ zIndex: 0, right: "$5" }}
          >
            <BiSearch />
          </Button>
        </Row>
      </Row>
    </Container>
  );
};

export default Header;
