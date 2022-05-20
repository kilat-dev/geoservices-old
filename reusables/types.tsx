export interface BreadcrumbItemProps {
  title: string;
  url: string;
}

export type BreadcrumbProps = BreadcrumbItemProps[];

export interface BreadcrumbMapProps {
  [x: string]: BreadcrumbProps;
}
