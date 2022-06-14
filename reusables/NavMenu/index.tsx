import React, { useState } from "react";
import Box from "reusables/Box";
import { Popover } from "@nextui-org/react";
import { NavMainMenuProps } from "reusables/types";

export interface NavMenuProps {
  MainMenu: (x: NavMainMenuProps) => JSX.Element;
  getSubMenu: (x: string) => () => JSX.Element;
}

export const NavMenu = ({ MainMenu, getSubMenu }: NavMenuProps) => {
  const [selectedSubMenu, setSelectedSubMenu] = useState("default");
  const SubMenu = getSubMenu(selectedSubMenu);

  return (
    <Box
      css={{
        display: "grid",
        gridAutoRows: "1fr",
        gridTemplateColumns: "30% 1fr",
      }}
    >
      {/* left Side */}
      <Box css={{ padding: "10px 40px 10px 100px" }}>
        <MainMenu selected={selectedSubMenu} onChange={setSelectedSubMenu} />
      </Box>

      {/* Right Side */}
      <Box
        css={{
          backgroundColor: "#F8F8F8",
          padding: "10px 70px 10px 10px",
        }}
      >
        <SubMenu />
      </Box>
    </Box>
  );
};

export interface NavProps extends NavMenuProps {
  children: JSX.Element;
  [x: string]: any;
}

export const Nav = ({ children, MainMenu, getSubMenu, ...rest }: NavProps) => {
  return (
    <Popover {...rest} placement="bottom-right" disableAnimation offset={18}>
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Content
        css={{
          left: "0!important",
          borderRadius: 0,
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <NavMenu MainMenu={MainMenu} getSubMenu={getSubMenu} />
      </Popover.Content>
    </Popover>
  );
};
