import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "7inf0jqp",
  dataset: "production",
  apiVersion: "2023-01-13", // Use the correct API version
  useCdn: true,
});