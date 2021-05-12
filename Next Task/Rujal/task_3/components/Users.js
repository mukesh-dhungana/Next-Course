import React from 'react'
import User from './User'

function Users({ data }) {
    return (
        <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
            <table>
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => (
                        <User key={user.id} user={user} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Users