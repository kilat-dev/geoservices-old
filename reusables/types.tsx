export interface BreadcrumbItemProps {
  title: string;
  url: string;
  textColor?: string;
}

export type BreadcrumbProps = BreadcrumbItemProps[];

export interface BreadcrumbMapProps {
  [x: string]: BreadcrumbProps;
}
