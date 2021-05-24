import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        data: [],
        editMode: false,
        dataDetail: {}
    },
    reducers: {
        addData: (state, { payload }) => {
            console.log(payload);
            state.data = [...state.data, payload]
        },

        deleteData: (state, { payload }) => {
            state.data = state.data.filter(x => x.id !== payload)
        },

        updateData: (state, { payload }) => {
            state.data = state.data.map(x => x.id === payload.id ? payload : x)
            state.editMode = false
        },

        editData: (state, { payload }) => {
            state.editMode = true
            state.dataDetail = state.data.find(x => x.id === payload)
        }
    }
})

export const { addData, deleteData, updateData, editData } = todoSlice.actions
export default todoSlice.reducer