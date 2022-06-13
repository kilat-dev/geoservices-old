import React from "react";
import Box from "reusables/Box";
import { Button } from "@nextui-org/react";
import { Nav } from "reusables/NavMenu";

const Sandbox = () => {
  return (
    <Box>
      <Nav>
        <Button auto flat>
          Open Popover
        </Button>
      </Nav>
    </Box>
  );
};

export default Sandbox;
