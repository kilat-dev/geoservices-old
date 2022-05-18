import Box from "components/Box";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { BasicLayoutProps } from "./type";

const BasicLayout = ({ children }: BasicLayoutProps) => {
  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default BasicLayout;
