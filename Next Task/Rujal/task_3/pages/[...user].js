import React from 'react'
import UserDetail from '../components/UserDetail';
import Users from '../components/Users';

const User = ({ data }) => (Array.isArray(data) ? <Users data={data} /> : <UserDetail data={data} />)

export default User

export const getServerSideProps = async (context) => {
    const response = await fetch("https://jsonplaceholder.typicode.com" + context.resolvedUrl)
    const data = await response.json()
    return {
        props: { data }
    }
}