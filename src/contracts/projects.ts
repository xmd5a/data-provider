import { Money } from './common';

export type SDG = {
  symbol: string;
  description?: string;
};

export type SDGs = Array<SDG>;

type ProjectDescription = {
  text?: string;
  text_ext?: string;
};

type ProjectGallery = {
  main_picture: string;
  additional_pictures?: Array<string>;
};

type ProjectOperator = {
  name: string;
  url?: string;
};

type Certificate = {
  name: string;
  url?: string;
};

export type ProjectDetails = {
  id: string;
  type: string;
  co2_price_per_ton: Money;
  yearly_reduction: number;
  gallery: ProjectGallery;
  title: string;
  description: ProjectDescription;
  certificate: Certificate;
  sdg: SDGs;
  project_of_month: boolean;
  website: string;
  project_operator: ProjectOperator;
  country: string;
};

type ProjectsResponse = Pick<ProjectDetails, 'id' | 'co2_price_per_ton' | 'gallery' | 'title' | 'project_of_month'>;

export type GetProjectFeaturedIdResponse = {
  project_id: string;
};

export type GetProjectDetailsPayload = GetProjectFeaturedIdResponse;

export type GetProjectDetailsResponse = ProjectDetails;

export type GetProjectsResponse = {
  projects: Array<ProjectsResponse>;
};
