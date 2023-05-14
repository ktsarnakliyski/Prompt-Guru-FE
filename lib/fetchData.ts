type Prompt = {
  id: number
  name: string
  system_message: string
  message: string
}

export async function fetchPrompts(): Promise<Prompt[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/prompts`)
  const data = await res.json()
  return data
}
