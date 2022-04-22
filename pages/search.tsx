import Search from "module/Search";
import BasicLayout from "module/BasicLayout";
import { PageType } from "pages/types";
import { GetServerSidePropsContext } from "next";
import { SEARCH as PAGE } from "pageConstant";

const SearchPage: PageType = Search;
SearchPage.layout = BasicLayout;
SearchPage.title = PAGE.title;

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const { q } = query;

  return {
    props: {
      query: q || "",
    },
  };
};

export default SearchPage;
