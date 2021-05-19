import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { wrapper } from '../redux/store'
import Form from '../Component/Form'
import User from '../Component/User'
import { deleteUser } from '../redux/actions/userActions'
function Users() {

    const dispatch = useDispatch()
    const users = useSelector(state => state.userData.users)
    const userDetail = useSelector(state => state.userData.userDetail)
    const editMode = useSelector(state => state.userData.editMode)

    const deleteData = (payload) => dispatch(deleteUser(payload))
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
export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store }) => {
        const res = await fetch('http://localhost:8000/users')
        const data = await res.json()
        store.dispatch({ type: "FETCH_USER", payload: data })
    }
)