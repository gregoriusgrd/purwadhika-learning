import axios from "axios";

export async function fetchBlogService() {
  try {
    const { data } = await axios.get(
      `${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries`,
    );

    return data?.items;
  } catch (err) {
    console.error("Failed to fetch", err);
    return [];
  }
}

export async function fetchBlogServiceById(id: string) {
  try {
    const { data } = await axios.get(
      `${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries/${id}`,
    );

    return data;
  } catch (err) {
    console.error("Failed to fetch", err);
    return null;
  }
}
