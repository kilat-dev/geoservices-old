import { Card, styled, Text } from "@nextui-org/react";
import React from "react";
import Box from "reusables/Box";

const CardText = styled(Text, {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "32px",
  lineHeight: "39px",
  color: "#4F4F4F",
});

const CoreAnalysis = () => {
  return (
    <Box
      css={{
        display: "grid",
        gridAutoRows: "1fr",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "30px",
        my: "$20",
        justifyItems: "center",
      }}
    >
      {/* ROW 1 */}
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <CardText>Wellsite Core handling & Preservation</CardText>
      </Card>
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <CardText>Laboratory Preservation </CardText>
      </Card>
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <CardText>Gamma Logging& CT Scanning </CardText>
      </Card>

      {/* ROW 2 */}
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <CardText>Conventional & Digital Photography </CardText>
      </Card>
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <CardText>Routine Core Analysis </CardText>
      </Card>
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <CardText>Special Core Analysis </CardText>
      </Card>

      {/* ROW 3 */}
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <CardText>Reservoir Unitization </CardText>
      </Card>
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <CardText>Formation Damage Evaluation </CardText>
      </Card>
      <Card
        css={{
          minHeight: "150px",
          minWidth: "350px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <CardText>Rock Mechanics </CardText>
      </Card>
    </Box>
  );
};

export default CoreAnalysis;
