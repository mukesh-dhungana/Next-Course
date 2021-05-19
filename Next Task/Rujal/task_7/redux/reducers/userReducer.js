import { HYDRATE } from "next-redux-wrapper";

const initial = {
    users: [],
    editMode: false,
    userDetail: {}
}

const userReducer = (state = initial, action) => {
    switch (action.type) {

        case HYDRATE:
            return {
                ...state, ...action.payload.userData
            }

        case "FETCH_USER":

            return {
                ...state,
                users: [...action.payload]
            }

        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(x => x.id !== action.payload)
            }

        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload],
            }

        case "UPDATE_USER":
            return {
                ...state,
                editMode: false,
                users: state.users.map(x => x.id === action.payload.id ? action.payload : x),
                userDetail: {}
            }

        case "EDIT_MODE":
            return {
                ...state,
                editMode: true,
                userDetail: state.users.find(x => x.id === action.payload)
            }


        default:
            return state;
    }
}

export default userReducer;