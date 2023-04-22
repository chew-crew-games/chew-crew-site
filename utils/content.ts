import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

const metadataPath = "/metadata";

export const NAVBAR_METADATA_PATH = `${metadataPath}/config/navbar`;
export interface NavbarMetadata extends ParsedContent {
  logo: string;
  links: { text: string; url: string }[];
}
