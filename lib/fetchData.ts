type User = {
  id: number
  name: string
  email: string
}

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`)
  const data = await res.json()
  return data
}
