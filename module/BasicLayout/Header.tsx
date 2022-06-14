import React, { useState } from "react";
import { Row, Button, Input, Text } from "@nextui-org/react";
import { IoSearchOutline } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import Image from "next/image";
import TextLink from "reusables/TextLink";
import Dot from "reusables/Dot";
import Box from "reusables/Box";
import { Nav } from "reusables/NavMenu";
import menu from "reusables/NavMenu/OilAndGasMenu";

const Header = () => {
  const [isExpand, setExpand] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const logo = "/assets/logo2.png";

  return (
    <Box css={{ minHeight: "80px" }}>
      <Box
        css={{
          m: 0,
          p: 0,
          top: 0,
          minHeight: "80px",
          position: "fixed",
          zIndex: 2,
          background: "rgba(255, 255, 255, 0.8)",
          display: "grid",
          gridAutoRows: "1fr",
          width: "100%",
        }}
      >
        <Box
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItem: "center",
            position: "relative",
            height: "100%",
          }}
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

          <Box
            css={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              pl: "100px",
            }}
          >
            <Image
              src={logo}
              width="266px"
              height="63px"
              alt="logo"
              objectFit="initial"
            />
          </Box>

          <Box
            css={{
              display: "grid",
              alignItems: "center",
              gridAutoRows: "1fr",
              gridTemplateColumns: "auto 1fr",
            }}
          >
            <Box css={{ mr: "$5" }}>
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
                <Nav {...menu}>
                  <Text>
                    <a href="#">Oil and Gas</a>
                  </Text>
                </Nav>

                {/* <TextLink href="">Oil and Gas</TextLink> */}
                <TextLink href="">Coal and Minerals</TextLink>
                <TextLink href="">Geothermal</TextLink>
                <TextLink href="">Trade and Services</TextLink>
              </Row>
            </Box>

            <Button
              auto
              onPress={() => {
                setExpand(true);
              }}
              css={{
                backgroundColor: "#363C9A",
                zIndex: 0,
                borderRadius: "0",
                height: "100%",
                width: "90px",
              }}
            >
              <IoSearchOutline size={30} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
