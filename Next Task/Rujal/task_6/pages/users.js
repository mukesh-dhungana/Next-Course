import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Form from '../components/Form'
import User from '../components/User'
import { initializeStore } from '../redux'

function Users() {

    const dispatch = useDispatch()
    const { users, editMode, userDetail } = useSelector(state => state.userData, shallowEqual)

    const deleteData = (payload) => dispatch({ type: "DELETE_USER", payload })
    const editData = (payload) => dispatch({ type: "EDIT_MODE", payload })

    return (
        <div style={{ width: "50%", margin: 'auto' }}>
            <div>
                <Form editMode={editMode} users={users} dispatch={dispatch} userDetail={userDetail} />
            </div>
            <div>
                <h3>List User</h3>
                <table>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user =>
                            <User
                                key={user.id}
                                {...user}
                                deleteData={deleteData}
                                editData={editData}
                            />)}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Users

export const getServerSideProps = async () => {
    const { dispatch, getState } = initializeStore()
    const res = await fetch('http://localhost:3000/api/users')
    const data = await res.json()
    dispatch({ type: "FETCH_USER", payload: data })

    return { props: { initialReduxState: getState() } }
}
