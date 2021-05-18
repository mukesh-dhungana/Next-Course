import React from 'react'

const getId = (data) => data.reduce((a, c) => a.id > c.id ? a.id + 1 : c.id + 1, 0)

const defaultValue = {
    username: '',
    email: '',
    password: ''
}

export default function Form({ users, editMode, dispatch, userDetail }) {
    const [data, setData] = React.useState(defaultValue)

    React.useEffect(() => {
        if (editMode) {
            setData(userDetail)
        }
    }, [userDetail, editMode])

    const handleChange = (e) => setData(d => ({ ...d, [e.target.name]: e.target.value }))

    const handleSubmit = (e) => {
        e.preventDefault()
        if (editMode) {
            dispatch({ type: "UPDATE_USER", payload: data })

        } else {
            dispatch({ type: "ADD_USER", payload: { id: getId(users), ...data } })
        }
        setData(defaultValue)
    }

    return (
        <div>
            <h3>{editMode ? "Edit" : "Add"} Data</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" onChange={handleChange} value={data.username} />
                <input type="text" name="email" onChange={handleChange} value={data.email} />
                <input type="password" name="password" onChange={handleChange} value={data.password} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
