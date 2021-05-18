import React from 'react'
import Link from 'next/link'
export default function Home() {

  return (
    <div>
      <Link href="/users"><a>
        <h1>Users</h1>
      </a></Link>
    </div>
  )
}
