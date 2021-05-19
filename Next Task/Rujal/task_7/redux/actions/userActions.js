const BASE_URL = "http://localhost:8000"

export const addUser = (data) => dispatch => {
    fetch(BASE_URL + "/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => dispatch({ type: "ADD_USER", payload: data }))
}

export const deleteUser = (id) => dispatch => {
    fetch(BASE_URL + '/users/' + id, {
        method: 'DELETE',
    })
        .then(res => res.text()) // or res.json()
        .then(payload => dispatch({ type: "DELETE_USER", payload: id }))
}

export const updateUser = (data) => dispatch => {
    fetch(BASE_URL + "/users/" + data.id, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(payload => dispatch({ type: "UPDATE_USER", payload: data }))
}