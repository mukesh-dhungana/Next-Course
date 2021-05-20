import * as actionTypes from "./actionTypes";

export const saveCountry = (doc) => async (dispatch) => {
  await fetch("http://localhost:3000/countries", {
    method: "POST",
    body: JSON.stringify(doc),
    headers: { "Content-Type": "application/json" },
  });

  dispatch({
    type: actionTypes.ADD_COUNTRY,
    payload: doc,
  });
};

export const deleteCountry = (id) => async (dispatch) => {
  await fetch("http://localhost:3000/countries/" + id, {
    method: "DELETE",
  });

  dispatch({ type: actionTypes.DELETE_COUNTRY, id });
};

export const updateCountry = (doc) => async (dispatch) => {
  await fetch("http://localhost:3000/countries/" + doc.id, {
    method: "PUT",
    body: JSON.stringify(doc),
    headers: { "Content-Type": "application/json" },
  });

  dispatch({
    type: actionTypes.EDIT_COUNTRY,
    payload: doc,
  });
};
