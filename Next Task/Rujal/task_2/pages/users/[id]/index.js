import React from 'react'
import { useRouter } from 'next/router'

const parent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
}

function User({ data: { name, username, phone } }) {

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

export default User

export const getStaticProps = async ({ params }) => {
    const response = await fetch(" https://jsonplaceholder.typicode.com/users/" + params.id)
    const data = await response.json()
    return {
        props: { data }
    }
}

export const getStaticPaths = async () => {
    const response = await fetch(" https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    const paths = data.map(user => ({
        params: { id: user.id + "" }
    }))
    return { paths, fallback: false }
}
