import NewsDetail from "module/News/NewsDetail";
import BasicLayout from "module/BasicLayout";
import { PageType } from "module/types";
import { GetServerSidePropsContext } from "next";
import { DETAIL as PAGE } from "pageConstant/news";

const NewsDetailPage: PageType = NewsDetail;
NewsDetailPage.layout = BasicLayout;
NewsDetailPage.title = PAGE.title;

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const { id } = params || {};

  return {
    props: {
      id,
    },
  };
};

export default NewsDetailPage;
