import { Link, Text } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";

const TextLink = ({ href, fontSize, children, ...rest }: any) => {
  return (
    <Text>
      <NextLink href={href} passHref>
        <Link
          color="text"
          css={{
            fontSize: `$${fontSize}`,
          }}
          {...rest}
        >
          {children}
        </Link>
      </NextLink>
    </Text>
  );
};

export default TextLink;
