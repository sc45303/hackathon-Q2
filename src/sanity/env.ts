export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skAnvMqWZy86cVzk4Hl11HxRCQm6rxyw63XtyQT4rQTkf9pcqOLUt98vhMVRQugrvkcrgTkv872buip82TqCS79Op0EteIKcXPt7IFC60SqnCbP4RLqjgW4vP7rH6ONVkwz2spSY4lzf9D80tqNlCT99grhLeYk0Cg7X42NTh0ms9TL3scjK",
  'Missing environment variable: SANITY_API_TOKEN'
)


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
