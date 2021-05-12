import React from 'react'
import { useRouter } from 'next/router'

const parent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
}

export default function UserDetail({ data: { name, username, phone } }) {

    const router = useRouter()

    return (
        <div className={parent}>
            <div>
                <h1>Name: {name}</h1>
            </div>
            <div>
                <h2>Username: {username}</h2>
            </div>
            <div>
                <h2>Phone: {phone}</h2>
            </div>
            <div>
                <button onClick={() => router.push({ pathname: '/users' })}>User List</button>
            </div>
        </div>
    )
}