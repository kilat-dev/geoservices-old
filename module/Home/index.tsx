import { Container, Link } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import * as PAGES from "pageConstant";

const Home = () => {
  return (
    <>
      <Container>
        <NextLink href={PAGES.HOME.url} passHref>
          <Link>Home</Link>
        </NextLink>
      </Container>

      <Container>
        <NextLink href={PAGES.NEWS.url} passHref>
          <Link>News</Link>
        </NextLink>
      </Container>

      <Container>
        <NextLink
          href={{
            pathname: PAGES.NEWS.DETAIL.url,
            query: {
              id: 2,
            },
          }}
          passHref
        >
          <Link>News Detail</Link>
        </NextLink>
      </Container>

      <Container>
        <NextLink href={PAGES.ABOUT.url} passHref>
          <Link>About</Link>
        </NextLink>
      </Container>

      <Container>
        <NextLink href={PAGES.CONTACT.url} passHref>
          <Link>Contact Us</Link>
        </NextLink>
      </Container>

      <Container>
        <NextLink href={PAGES.EVENT.url} passHref>
          <Link>Event</Link>
        </NextLink>
      </Container>

      <Container>
        <NextLink href={PAGES.LAB.url} passHref>
          <Link>Lab</Link>
        </NextLink>
      </Container>

      <Container>
        <NextLink
          href={{
            pathname: PAGES.SEARCH.url,
            query: { q: "wawa" },
          }}
          passHref
        >
          <Link>Search</Link>
        </NextLink>
      </Container>
    </>
  );
};

export default Home;
