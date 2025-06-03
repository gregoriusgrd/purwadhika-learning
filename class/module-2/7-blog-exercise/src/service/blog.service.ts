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
      },
    });

    return data?.items;
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
