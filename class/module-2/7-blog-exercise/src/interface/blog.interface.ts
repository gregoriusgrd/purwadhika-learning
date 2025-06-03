import { Document } from "@contentful/rich-text-types";

export interface IBlog {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    authorName: string;
    publishDate: string;
    description: string;
    // article: Document | undefined;
  };
}