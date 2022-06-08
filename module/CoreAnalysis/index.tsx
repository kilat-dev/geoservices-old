import { Card, styled, Text } from "@nextui-org/react";
import React from "react";
import Box from "reusables/Box";

const CardText = styled(Text, {
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "32px",
  lineHeight: "39px",
});

const CoreAnalysis = () => {
  return (
    <Box
      css={{
        display: "grid",
        gridAutoRows: "1fr",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "30px 60px",
        mt: "$15",
        mb: "$40",
        justifyItems: "center",
      }}
    >
      {/* ROW 1 */}
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
          boxShadow: "10px 10px #E0E0E0",
        }}
      >
        <CardText css={{ color: "#4F4F4F" }}>
          Wellsite Core handling & Preservation
        </CardText>
      </Card>
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
          boxShadow: "10px 10px #E0E0E0",
        }}
      >
        <CardText css={{ color: "#4F4F4F" }}>Laboratory Preservation </CardText>
      </Card>
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
          boxShadow: "10px 10px #E0E0E0",
        }}
      >
        <CardText css={{ color: "#4F4F4F" }}>
          Gamma Logging& CT Scanning{" "}
        </CardText>
      </Card>

      {/* ROW 2 */}
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
          boxShadow: "10px 10px #E0E0E0",
        }}
      >
        <CardText css={{ color: "#4F4F4F" }}>
          Conventional & Digital Photography{" "}
        </CardText>
      </Card>
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
          boxShadow: "10px 10px #E0E0E0",
        }}
      >
        <CardText css={{ color: "#4F4F4F" }}>Routine Core Analysis </CardText>
      </Card>
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
          boxShadow: "10px 10px #E0E0E0",
        }}
      >
        <CardText css={{ color: "#4F4F4F" }}>Special Core Analysis </CardText>
      </Card>

      {/* ROW 3 */}
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
          boxShadow: "10px 10px #E0E0E0",
        }}
      >
        <CardText css={{ color: "#4F4F4F" }}>Reservoir Unitization </CardText>
      </Card>
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
          boxShadow: "10px 10px #E0E0E0",
        }}
      >
        <CardText css={{ color: "#4F4F4F" }}>
          Formation Damage Evaluation{" "}
        </CardText>
      </Card>
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
          boxShadow: "10px 10px #E0E0E0",
        }}
      >
        <CardText css={{ color: "#4F4F4F" }}>Rock Mechanics </CardText>
      </Card>
    </Box>
  );
};

export default CoreAnalysis;
