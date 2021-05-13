import React from 'react'
import dynamic from 'next/dynamic'

const UserDetail = dynamic(() => import('../../Components/UserDetail'))

const User = ({ data }) => <UserDetail data={data} />

export default User

export const getServerSideProps = async ({ params }) => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await response.json()
    if (Object.values(data).length === 0) {
        return {
            redirect: {
                destination: '/admin',
                permanent: false,
            },
        }
    }
    return {
        props: { data }
    }
}
