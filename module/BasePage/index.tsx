import Head from "next/head";
import React from "react";
import { BasePageProps } from "./type";

export const BasePage = ({ children, title }: BasePageProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {children}
    </>
  );
};
