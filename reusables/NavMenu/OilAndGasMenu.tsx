import React from "react";
import Box from "reusables/Box";
import { Image, Text } from "@nextui-org/react";
import { BsArrowRight } from "react-icons/bs";
import { NavMainMenuProps } from "reusables/types";
import TextLink from "reusables/TextLink";
import {
  selectedColor,
  defaultColor,
  options,
  explorationOptions,
  softwareOptions,
} from "./constants";

export const MainMenu = ({ onChange, selected }: NavMainMenuProps) => {
  const handleSelect = (selectedMenu: string) => () => {
    if (onChange) {
      onChange(selectedMenu);
    }
  };

  return (
    <>
      <Box
        css={{
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          css={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "22px",
          }}
        >
          Oil and Gas
        </Text>
      </Box>
      {options?.map((item) => (
        <a key={item?.name} href="#" onClick={handleSelect(item?.name)}>
          <Box
            css={{
              margin: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              css={{
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
                color: selected === item?.name ? selectedColor : defaultColor,
              }}
            >
              {item?.label}
            </Text>
            <BsArrowRight color="#EC1C24" />
          </Box>
        </a>
      ))}
    </>
  );
};

export const DefaultSubMenu = () => {
  const image1 = "/assets/bg-personlab1.png";

  return (
    <Box
      css={{
        display: "grid",
        gridAutoRows: "1fr",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <Box css={{ mx: "20px" }}>
        <Image
          src={image1}
          objectFit="fill"
          height={250}
          containerCss={{
            borderRadius: "0",
          }}
        />
        <Box
          css={{
            margin: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            css={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "22px",
            }}
          >
            PVT Analysis
          </Text>
          <BsArrowRight color="#EC1C24" />
        </Box>
      </Box>
      <Box css={{ mx: "20px" }}>
        <Image
          src={image1}
          objectFit="fill"
          height={250}
          containerCss={{
            borderRadius: "0",
          }}
        />
        <Box
          css={{
            margin: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            css={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "22px",
            }}
          >
            Geo Lab
          </Text>
          <BsArrowRight color="#EC1C24" />
        </Box>
      </Box>
      <Box css={{ mx: "20px" }}>
        <Image
          src={image1}
          objectFit="fill"
          height={250}
          containerCss={{
            borderRadius: "0",
          }}
        />
        <Box
          css={{
            margin: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            css={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "22px",
            }}
          >
            Geo Lab
          </Text>
          <BsArrowRight color="#EC1C24" />
        </Box>
      </Box>
    </Box>
  );
};

export const ExplorationSubMenu = () => {
  const image1 = "/assets/bg-machinery.png";

  return (
    <>
      <Box
        css={{
          margin: "10px 10px 15px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          css={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "22px",
          }}
        >
          Exploration
        </Text>
      </Box>

      <Box css={{ display: "flex" }}>
        <Box
          css={{
            width: "70%",
            display: "grid",
            gridAutoRows: "min-content",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {explorationOptions?.map((option) => (
            <Box
              key={option?.name}
              css={{
                mx: "10px",
                mb: "15px",
              }}
            >
              <TextLink
                textCSS={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "22px",
                }}
                href={option.href}
              >
                {option.label}
              </TextLink>
            </Box>
          ))}
        </Box>
        <Box css={{ mx: "$14" }}>
          <Image
            src={image1}
            objectFit="fill"
            height={250}
            containerCss={{
              borderRadius: "0",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export const SoftwareSubMenu = () => {
  const image1 = "/assets/bg-machinery.png";

  return (
    <>
      <Box
        css={{
          margin: "10px 10px 15px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          css={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "22px",
          }}
        >
          Software
        </Text>
      </Box>

      <Box css={{ display: "flex" }}>
        <Box
          css={{
            width: "70%",
            display: "grid",
            gridAutoRows: "min-content",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {softwareOptions?.map((option) => (
            <Box
              key={option?.name}
              css={{
                mx: "10px",
                mb: "15px",
              }}
            >
              <TextLink
                textCSS={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "22px",
                }}
                href={option.href}
              >
                {option.label}
              </TextLink>
            </Box>
          ))}
        </Box>
        <Box css={{ mx: "$14" }}>
          <Image
            src={image1}
            objectFit="fill"
            height={250}
            containerCss={{
              borderRadius: "0",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

const subMenu: { [x: string]: () => JSX.Element } = {
  default: DefaultSubMenu,
  exploration: ExplorationSubMenu,
  software: SoftwareSubMenu,
  training: () => <>training</>,
  wellAndServices: () => <>wellAndServices</>,
  laboratory: () => <>laboratory</>,
};

export const getSubMenu = (selected: string) => {
  return subMenu[selected] ?? subMenu["default"];
};

export default {
  MainMenu,
  getSubMenu,
};
