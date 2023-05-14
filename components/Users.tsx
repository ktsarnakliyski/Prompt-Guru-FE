'use client'

import { useEffect, useState } from 'react'
import { fetchUsers } from '../lib/fetchData'

type User = {
  id: number
  name: string
  email: string
}

function Users() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function getUsers() {
      const data = await fetchUsers()
      setUsers(data)
    }
    getUsers()
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} - {user.email}
        </div>
      ))}
    </div>
  )
}

export default Users
