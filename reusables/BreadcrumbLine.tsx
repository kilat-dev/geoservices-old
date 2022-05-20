import React from "react";
import { FiChevronRight } from "react-icons/fi";
import Box from "reusables/Box";
import TextLink from "reusables/TextLink";
import { BreadcrumbProps } from "./types";

export interface BreadCrumbLineProps {
  items: BreadcrumbProps;
}

const BreadCrumbLine = ({ items }: BreadCrumbLineProps) => {
  return (
    <Box
      css={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {items?.map((item, index) => (
        <>
          <Box
            css={{
              m: "$2",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextLink href={item.url}>{item.title}</TextLink>
          </Box>

          {index < items.length - 1 && (
            <Box
              css={{
                m: "$2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                top: "$1",
              }}
            >
              <FiChevronRight />
            </Box>
          )}
        </>
      ))}
    </Box>
  );
};

export default BreadCrumbLine;
