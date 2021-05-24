import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, updateData } from '../redux/todoReducer'

const defaultValue = { name: '', address: '' }
const getId = (data) => data.reduce((a, c) => a.id > c.id ? a.id + 1 : c.id + 1, 1)
function Form() {

    const dispatch = useDispatch()
    const dataDetail = useSelector(state => state.todo.dataDetail)
    const editMode = useSelector(state => state.todo.editMode)
    const datas = useSelector(state => state.todo.data)

    const [data, setData] = React.useState(defaultValue)

    React.useEffect(() => {
        if (editMode) {
            console.log(dataDetail);
            setData(dataDetail)
        }
    }, [editMode, dataDetail])

    const handleChange = (e) => setData(th => ({ ...th, [e.target.name]: e.target.value }))

    const handleSubmit = (e) => {
        e.preventDefault()
        if (editMode) {
            dispatch(updateData(data))
        } else {
            dispatch(addData({ ...data, id: getId(datas) }))
        }
        setData(defaultValue)
    }

    return (
        <div>
            <h1>{editMode ? "Edit" : "Add"} Data</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" onChange={handleChange} value={data.name} />
                </div>
                <div>
                    <div>
                        <input type="text" name="address" onChange={handleChange} value={data.address} />
                    </div>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Form
