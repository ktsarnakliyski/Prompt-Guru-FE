'use client'

import { fetchPrompts } from '@/lib/fetchData'
import { useEffect, useState } from 'react'

type Prompt = {
  id: number
  name: string
  system_message: string
  message: string
}

function Prompts() {
  const [prompts, setPrompts] = useState<Prompt[]>([])

  useEffect(() => {
    async function getPrompts() {
      const data = await fetchPrompts()
      setPrompts(data)
    }
    getPrompts()
  }, [])

  return (
    <div>
      <h1>Prompts</h1>
      {prompts.map((prompt) => (
        <div key={prompt.id}>
          <h2>{prompt.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default Prompts
