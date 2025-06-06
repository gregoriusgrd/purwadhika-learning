import axios from "axios";

export async function fetchBlogService() {
  try {
    const url = `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}/entries`;

    console.log("URL yang dipanggil:", url);
    console.log("access_token:", process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY);

    const { data } = await axios.get(url, {
      params: {
        access_token: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY,
        content_type: "blog",
        include: 1,
      },
    });

    const assetsMap: Record<string, any> = {};
    data.includes?.Asset?.forEach((asset: any) => {
      assetsMap[asset.sys.id] = asset;
    });

    const blogsWithImages = data.items.map((item: any) => {
      const thumbnailRef = item.fields.thumbnail;
      if (thumbnailRef?.sys?.id && assetsMap[thumbnailRef.sys.id]) {
        item.fields.thumbnail = assetsMap[thumbnailRef.sys.id];
      }

      const authorImageRef = item.fields.authorImage;
      if (authorImageRef?.sys?.id && assetsMap[authorImageRef.sys.id]) {
        item.fields.authorImage = assetsMap[authorImageRef.sys.id];
      }

      return item;
    });

    return blogsWithImages;

  } catch (err) {
    console.error("Failed to fetch", err);
    return [];
  }
}

export async function fetchBlogServiceById(id: string) {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}/entries/${id}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY}`
    );

    return data;
  } catch (err) {
    console.log(err);
  }
}



// author image
/*
export async function fetchBlogService() {
  try {
    const url = `${process.env.NEXT_PUBLIC_CONTENTFUL_URL}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}/entries`;

    const { data } = await axios.get(url, {
      params: {
        access_token: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY,
        content_type: "blog",
        include: 1,
      },
    });

    const assetsMap: Record<string, any> = {};
    data.includes?.Asset?.forEach((asset: any) => {
      assetsMap[asset.sys.id] = asset;
    });

    const blogsWithImages = data.items.map((item: any) => {
      const thumbnailRef = item.fields.thumbnail;
      if (thumbnailRef?.sys?.id && assetsMap[thumbnailRef.sys.id]) {
        item.fields.thumbnail = assetsMap[thumbnailRef.sys.id];
      }

      const authorImageRef = item.fields.authorImage;
      if (authorImageRef?.sys?.id && assetsMap[authorImageRef.sys.id]) {
        item.fields.authorImage = assetsMap[authorImageRef.sys.id];
      }

      return item;
    });

    return blogsWithImages;
  } catch (err) {
    console.error("Failed to fetch", err);
    return [];
  }
}
*/

// later
/*
    const blogsWithImages = data.items.map((item: any) => {
      const thumbnailRef = item.fields.thumbnail;
      if (thumbnailRef?.sys?.id && assetsMap[thumbnailRef.sys.id]) {
        item.fields.thumbnail = assetsMap[thumbnailRef.sys.id];
      }

      const authorImageRef = item.fields.authorImage;
      if (authorImageRef?.sys?.id && assetsMap[authorImageRef.sys.id]) {
        item.fields.authorImage = assetsMap[authorImageRef.sys.id];
      }

      return item;
    });

    return blogsWithImages;
*/

