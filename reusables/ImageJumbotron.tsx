import React from "react";
import Box from "reusables/Box";
import { Image, Text } from "@nextui-org/react";

export interface ImageJumbotronProps {
  imageSrc: string;
  height?: string;
  objectPosition?: string;
  text: string;
}

const ImageJumbotron = ({
  imageSrc,
  height = "391px",
  objectPosition = "0",
  text = "",
}: ImageJumbotronProps) => {
  return (
    <Box css={{ width: "100%", position: "relative" }}>
      <Image
        src={imageSrc}
        objectFit="cover"
        height={height}
        containerCss={{
          borderRadius: "0",
          background: "rgba(0, 0, 0, 0.3)",
        }}
        css={{
          zIndex: "-1",
          objectPosition: `${objectPosition}`,
          position: "relative",
        }}
      />
      <Text
        css={{
          position: "absolute",
          top: "40%",
          left: "140px",
          color: "$white",
          // fontFamily: "Plus Jakarta Sans",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "60px",
          lineHeight: "76px",
          width: "80%",
          textTransform: "uppercase",
        }}
      >
        {text}
      </Text>
    </Box>
  );
};

export default ImageJumbotron;
