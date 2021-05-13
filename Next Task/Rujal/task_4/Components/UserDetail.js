import React from 'react'

const parent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
}

function UserDetail({ data }) {


    return (
        <div className={parent}>
            <div>
                <h1>Name: {data?.name}</h1>
            </div>
            <div>
                <h2>Username: {data?.username}</h2>
            </div>
            <div>
                <h2>Phone: {data?.phone}</h2>
            </div>

        </div>
    )
}

export default UserDetail