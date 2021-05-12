import React from 'react'
import Link from 'next/link'

function User({ user }) {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.address.street}</td>
            <td>
                <Link href={`/users/${user.id}`}><a style={{color:"red"}}>Click</a></Link>
            </td>
        </tr>
    )
}

export default User