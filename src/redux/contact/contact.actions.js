import axios from 'axios';

import contactActionTypes from './contact,types';
const BASE_URL = 'https://simple-contact-crud.herokuapp.com/contact';

// FETCH CONTACT
export const fetchContactStart = () => ({
  type: contactActionTypes.FETCH_CONTACT_START,
});

export const fetchContactSuccess = (contact) => ({
  type: contactActionTypes.FETCH_CONTACT_SUCCESS,
  payload: contact,
});

export const fetchContactFail = (error) => ({
  type: contactActionTypes.FETCH_CONTACT_FAIL,
  payload: error,
});

// POST CONTACT
export const postNewContactStart = () => ({
  type: contactActionTypes.POST_NEW_CONTACT_START,
});

export const postNewContactSuccess = () => ({
  type: contactActionTypes.POST_NEW_CONTACT_SUCCESS,
});

export const postNewContactFail = (error) => ({
  type: contactActionTypes.POST_NEW_CONTACT_FAIL,
  payload: error,
});

// FETCH CONTACT BY ID
export const fetchByIdContactStart = () => ({
  type: contactActionTypes.FETCH_BY_ID_CONTACT_START,
});

export const fetchByIdContactSuccess = (contact) => ({
  type: contactActionTypes.FETCH_BY_ID_CONTACT_SUCCESS,
  payload: contact,
});

export const fetchByIdContactFail = (error) => ({
  type: contactActionTypes.FETCH_BY_ID_CONTACT_FAIL,
  payload: error,
});

// DELETE CONTACT
export const deleteContactStart = () => ({
  type: contactActionTypes.DELETE_CONTACT_START,
});

export const deleteContactSuccess = () => ({
  type: contactActionTypes.DELETE_CONTACT_SUCCESS,
});

export const deleteContactFail = (error) => ({
  type: contactActionTypes.DELETE_CONTACT_FAIL,
  payload: error,
});

// EDIT CONTACT
export const editContactStart = () => ({
  type: contactActionTypes.EDIT_CONTACT_START,
});

export const editContactSuccess = () => ({
  type: contactActionTypes.EDIT_CONTACT_SUCCESS,
});

export const editContactFail = (error) => ({
  type: contactActionTypes.EDIT_CONTACT_FAIL,
  payload: error,
});

export const fetchContactListAsync = () => {
  return async (dispatch) => {
    dispatch(fetchContactStart());
    try {
      const response = await axios.get(BASE_URL);
      console.log('action get contact----res---', response);
      dispatch(fetchContactSuccess(response.data.data));
    } catch (error) {
      dispatch(fetchContactFail(error.message));
    }
  };
};

export const postNewContactAsync = (input) => {
  return async (dispatch) => {
    dispatch(postNewContactStart());
    try {
      console.log('action add----', input);
      const response = await axios.post(BASE_URL, input);
      console.log('action add new---', response);
      dispatch(postNewContactSuccess());
      fetchContactListAsync();
    } catch (error) {
      dispatch(postNewContactFail(error.message));
    }
  };
};

export const fetchByIdContactAsync = (id) => {
  return async (dispatch) => {
    dispatch(fetchByIdContactStart());
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      console.log('action get contact-byid---res---', response);
      dispatch(fetchByIdContactSuccess(response.data.data));
    } catch (error) {
      dispatch(fetchByIdContactFail(error.message));
    }
  };
};

export const deleteContactAsync = (id) => {
  console.log('actiondelete---', id);
  return async (dispatch) => {
    dispatch(deleteContactStart());
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      dispatch(deleteContactSuccess());
    } catch (error) {
      dispatch(deleteContactFail(error.message));
    }
  };
};

export const editContactAsync = (id, input) => {
  console.log('actionedit----', id, input);
  return async (dispatch) => {
    dispatch(editContactStart());
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, input);
      console.log('actionedit --res---', response);
      dispatch(editContactSuccess());
    } catch (error) {
      dispatch(editContactFail(error.message));
    }
  };
};
