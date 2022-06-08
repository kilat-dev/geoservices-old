import { Link, Text } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";

export interface TextLinkProps {
  href: string;
  fontSize?: string;
  children?: JSX.Element | string;
  [x: string]: any;
}

const TextLink = ({ href, fontSize, children, ...rest }: TextLinkProps) => {
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
