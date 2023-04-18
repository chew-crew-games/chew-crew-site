import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface Post {
  date: string;
  image: string;
  description?: string;
}

export interface Metadata extends ParsedContent {
  title: string;
}

export interface IllustrationMetadata extends Metadata {
  illustrations: Post[];
}

export interface ComicPages {
  title: string;
  date: string;
  description?: string;
  thumbnail?: string;
  comicpages: Post[];
}

export interface ComicMetadata extends Metadata {
  comics: ComicPages[];
}

export interface Sketches extends Metadata {
  sketches: Post[];
}
