import React from 'react'

function User({ id, username, email, deleteData, editData }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button onClick={() => editData(id)}>Edit</button>
                <button onClick={() => deleteData(id)}>Delete</button>
            </td>
        </tr>
    )
}

export default User
