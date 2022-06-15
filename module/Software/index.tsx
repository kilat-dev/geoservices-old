import React from "react";
import Box from "reusables/Box";
import { Card, Image, Text } from "@nextui-org/react";
import TextLink from "reusables/TextLink";
import { companies, composeEmailLink } from "./constants";

const Software = () => {
  return (
    <Box css={{ mb: "$40" }}>
      {/* Card #1 */}
      <Box
        css={{
          display: "grid",
          gridAutoRows: "1fr",
          gridTemplateColumns: "25% 1fr",
          m: "$20 $0 $10 $0",
          borderTop: "4px solid #D3252C",
          boxShadow: "0px 4px 4px 0px #0000001A",
          p: "44px 193px 44px 52px",
        }}
      >
        <Box css={{ mr: "$10" }}>
          <Text
            css={{
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24px",
              color: "#D3252C",
            }}
          >
            Introduction
          </Text>
        </Box>
        <Box css={{}}>
          <Text
            css={{
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "24px",
              color: "#828282",
            }}
          >
            PT GEOSERVICES also functions as a representative of software companies 
            whose products are being used by oil companies wordlwide. Most of the products that we 
            represent are standards of the energy industry and we can attest from our own experience that they are "benchmark" quality.
          </Text>
        </Box>
      </Box>
      
      {/* Card #2 */}
      <Box
        css={{
          display: "grid",
          gridAutoRows: "1fr",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: '$10 $10',
          my: "$20",
          justifyItems: "center",
        }}
      >
        {companies?.map((item) => (
          <Card key={item?.name} variant="bordered" css={{ borderRadius: 0 }}>
            <Card.Body>
              <Box css={{height: '100%', display: 'grid', gridAutoColumns: '1fr', gridTemplateRows: '1fr auto'}}>
                <Box css={{display: 'flex', alignItems: 'center'}}>
                  <Image src={item?.logo} />
                </Box>
                <Box css={{display: 'flex', justifyContent: 'space-between', mx: '$5', height: '100%', alignItems: 'end'}}>
                  <TextLink href={composeEmailLink(item?.email)}>Request Quotation</TextLink>
                  <TextLink href={item?.url}>View Details</TextLink>
                </Box>
              </Box>
            </Card.Body>
          </Card>
        ))}
        
      </Box>

      {/* Card #3 */}
      <Box
        css={{
          display: "grid",
          gridAutoRows: "1fr",
          gridTemplateColumns: "25% 1fr",
          my: "$10",
          borderTop: "4px solid #D3252C",
          boxShadow: "0px 4px 4px 0px #0000001A",
          p: "44px 193px 44px 52px",
        }}
      >
        <Box css={{ mr: "$10" }}>
          <Text
            css={{
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24px",
              color: "#D3252C",
            }}
          >
            Contact us for details
          </Text>
        </Box>
        <Box css={{}}>
          <Text
            css={{
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "24px",
              color: "#828282",
            }}
          >
            Jakarta Office <br />
            Jl. Minangkabau Barat No. 34, <br />
            Jakarta, Indonesia <br />
            Phone : (021) 830 5555, 831 8989 <br />
            Fax : (021) 831 1454 <br />
            Email : softwareteam@geoservices.co.id <br />
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Software;
