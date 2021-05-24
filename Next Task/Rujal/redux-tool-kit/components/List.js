import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, editData } from '../redux/todoReducer'

function List() {

    const dispatch = useDispatch()
    const datas = useSelector(state => state.todo.data)

    return (
        <div>
            <h1>Show Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map(data => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.address}</td>
                            <td>
                                <button onClick={() => dispatch(editData(data.id))}>Edit</button>
                                <button onClick={() => dispatch(deleteData(data.id))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List
