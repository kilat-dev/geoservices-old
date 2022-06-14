import React from "react";
import Box from "reusables/Box";
import { Button } from "@nextui-org/react";
import { Nav } from "reusables/NavMenu";
import menu from "reusables/NavMenu/OilAndGasMenu";

const Sandbox = () => {
  return (
    <Box>
      <Nav {...menu}>
        <Button auto flat>
          Open Popover
        </Button>
      </Nav>
    </Box>
  );
};

export default Sandbox;
