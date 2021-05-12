import React from 'react'
import { useRouter } from 'next/router'
import UserDetail from '../components/UserDetail';
import Users from '../components/Users';

function User({ data }) {
    
    const { query: { user } } = useRouter()

    if (user.length === 1) {
        return <Users data={data} />
    } else {
        return <UserDetail data={data} />
    }

}

export default User

export const getServerSideProps = async (context) => {
    const response = await fetch("https://jsonplaceholder.typicode.com" + context.resolvedUrl)
    const data = await response.json()
    return {
        props: { data }
    }
}