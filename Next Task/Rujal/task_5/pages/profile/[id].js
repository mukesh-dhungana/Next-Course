import React from 'react'
import Image from 'next/image'

function UserDetail({ data: { name, image_url, email } }) {
    return (
        <div style={{width:"50%", margin:"auto"}}>
            <h1>Name : {name}</h1>
            <h3>Email : {email}</h3>
            <Image
                src={image_url}
                alt="Picture of the User"
                width={500}
                height={500}
            />
        </div>
    )
}

export default UserDetail

export const getServerSideProps = async ({ params }) => {
    const response = await fetch('http://localhost:3000/api/users/' + params.id)
    const data = await response.json()
    return {
        props: { data }
    }
}
