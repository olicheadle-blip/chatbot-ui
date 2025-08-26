// lib/server/server-chat-helpers.ts

export async function getServerProfile() {
  return {
    // ✅ Pull API key directly from environment
    openai_api_key: process.env.OPENAI_API_KEY || "",
    openai_organization_id: process.env.NEXT_PUBLIC_OPENAI_ORGANIZATION_ID || "",
  }
}

// Dummy check to keep existing calls happy
export function checkApiKey(key: string | undefined, provider: string) {
  if (!key) {
    throw new Error(`${provider} API Key not found. Please set it in your Vercel env vars.`)
  }
}
