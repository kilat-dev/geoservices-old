import React from "react";
import Box from "reusables/Box";
import { Image, Text } from "@nextui-org/react";

const Sandbox = () => {
  const image1 = "/assets/bg-personlab1.png";
  const image2 = "/assets/bg-personlab2.png";
  const vector1 = "/assets/research-vector.png";
  const vector2 = "/assets/vector-pump.png";

  return (
    <Box
      css={{
        display: "grid",
        gridAutoRows: "1fr",
        gridTemplateColumns: "1fr 1fr",
        my: "$20",
        justifyItems: "center",
      }}
    >
      {/* first row */}
      <Box css={{ width: "100%" }}>
        <Image
          src={image1}
          objectFit="fill"
          height={600}
          containerCss={{
            borderRadius: "0",
          }}
          css={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box>wa</Box>
      <Box>wa</Box>
      <Box css={{ width: "100%" }}>
        <Image
          src={image2}
          objectFit="cover"
          height={600}
          containerCss={{
            borderRadius: "0",
          }}
          css={{}}
        />
      </Box>
    </Box>
  );
};

export default Sandbox;
