import React, { Component } from 'react'

const parent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
}

export default class User extends Component {

    static async getInitialProps(context) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)
        const data = await res.json()
        return { data }
    }

    render() {
        const { data: { name, username, phone } } = this.props
        //console.log(data);
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
            </div>
        )
    }
}