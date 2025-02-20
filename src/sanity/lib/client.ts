import { apiVersion, dataset, projectId , token } from "../env";
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: true,
});                           


// import { createClient } from "@sanity/client";

// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
//   apiVersion: '2023-10-01',
//   useCdn: false, // Write operations  
//   token: process.env.SANITY_API_TOKEN, // Token 
// });