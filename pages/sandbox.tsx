import React from "react";
import { getBreadcrumb } from "pageConstant";
import { CORE_ANALYSIS as PAGE } from "pageConstant/oil_and_gas";
import BreadCrumbLine from "reusables/BreadcrumbLine";

const Sandbox = () => {
  const items = getBreadcrumb(PAGE.title);
  console.log(items);

  return <BreadCrumbLine items={items} />;
};

export default Sandbox;
