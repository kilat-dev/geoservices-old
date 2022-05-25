import { Image, Text } from "@nextui-org/react";
import React from "react";
import Box from "reusables/Box";

const RockDescription = () => {
  const image1 = "/assets/bg-coal-laboratory1.png";
  const vector1 = "/assets/vector-mineral.png";

  return (
    <>
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
        <Box>
          <Image
            src={image1}
            objectFit="cover"
            height={600}
            containerCss={{
              borderRadius: "0",
            }}
            css={{}}
          />
        </Box>
        <Box
          css={{
            backgroundColor: "#F8F8F8",
            width: "100%",
            px: "136px",
            pt: "55px",
            pb: "35px",
          }}
        >
          <Image
            src={vector1}
            objectFit="cover"
            containerCss={{
              borderRadius: "0",
            }}
            css={{ width: "64px", height: "64px" }}
          />
          <Text
            css={{
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24px",
              color: "#4F4F4F",
              my: "$10",
            }}
          >
            Rock Description
          </Text>
          <Text
            css={{
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24px",
              color: "#828282",
              my: "$10",
            }}
          >
            Sedimentology <br />
            Lithofacies Description <br />
            Petrography <br />
            Mineralogy & Reservoir Controls <br />
            (SEM, XRD, XRF & ICP) <br />
            Log to Rock Correlation <br />
          </Text>
        </Box>
      </Box>

      <Box
        css={{
          display: "grid",
          gridAutoRows: "1fr",
          gridTemplateColumns: "20% 1fr",
          my: "$20",
          alignItems: "center",
          borderTop: "4px solid #D3252C",
          boxShadow: "0px 4px 4px 0px #0000001A",
          p: "44px 193px 44px 52px",
        }}
      >
        {/* first row */}
        <Box css={{}}>
          <Text
            css={{
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24px",
              color: "#D3252C",
            }}
          >
            SYNTHESIS & INTERPRETATION
          </Text>
        </Box>
        <Box css={{}}>
          <Text
            css={{
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24px",
              color: "#828282",
            }}
          >
            Reservoir & Sequence characterization by integration of log,Rock
            properties, rock description, stratigraphic & geochemical data.
            Sample storage & digital archiving
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default RockDescription;
