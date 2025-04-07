import { auth } from '@/auth'
import Link from 'next/link'
import React from 'react'

const Home = async () => {
  const user = await auth()
  if (user) {
    return (
      <div className='w-screen h-dvh'>
        <p>{user.user.phone}</p>
        <p>{user.user.role}</p>
        <p>{user.user.name}</p>
      </div>
    )
  }
  return (
    <div className="w-screen h-dvh flex bg-primary items-center justify-center">
      <div className="max-w-sm p-6 min-h-dvh flex flex-col justify-between gap-6 sm:rounded-xl relative">
        <h1 className="text-2xl font-bold">Welcome to our app!</h1>
        <p className="text-lg">Please log in to continue.</p>
        <Link href="/login">
          Log in
        </Link>
      </div>
    </div>
  )
}

export default Home