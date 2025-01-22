import { createClient } from "next-sanity"
const client =  createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-07-11',
  useCdn: true
}) 


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export  async function sanityFetch({query, params = {}}: { query: string , params? : any }) {
  return  await client.fetch(query , params)
}