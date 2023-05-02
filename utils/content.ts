import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

const metadataPath = "/metadata";

export const NAVBAR_METADATA_PATH = `${metadataPath}/config/navbar`;
export interface NavbarMetadata extends ParsedContent {
  logo: string;
  links: {
    text: string;
    boxicon?: string;
    url: string;
  }[];
}

export const FOOTER_METADATA_PATH = `${metadataPath}/config/footer`;
export interface FooterMetadata extends ParsedContent {
  logo?: string;
  brandname?: string;
  footertext?: string;
  links: {
    boxicon?: string;
    text?: string;
    url: string;
  }[];
}

export const HOME_METADATA_PATH = `${metadataPath}/pages/home`;
export interface HomePageMetadata extends ParsedContent {
  heroimg: string;
  pretitle?: string;
  title: string;
  sectionheader: string;
  sectiondesc?: string;
  sectionembed?: string;
  ctaheader?: string;
  ctabuttons: {
    text: string;
    boxicon?: string;
    url: string;
  }[];
  ctaafter?: string;
}
