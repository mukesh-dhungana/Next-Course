import React from 'react'
import User from '../../components/User'

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

export const getStaticProps = async () => {
    const response = await fetch(" https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return {
        props: { data }
    }
}
