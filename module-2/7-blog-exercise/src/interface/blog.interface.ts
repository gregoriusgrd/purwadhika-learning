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
    thumbnail?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    authorImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    // article: Document | undefined;
  };
}
