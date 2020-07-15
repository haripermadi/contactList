import contactActionTypes from './contact,types';
import {act} from 'react-test-renderer';

const INITIAL_STATE = {
  contacts: [],
  isLoading: false,
  errorMsg: '',
  isLoadingPost: false,
  contactDetail: {},
  isLoadingDelete: false,
};

const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case contactActionTypes.FETCH_CONTACT_START:
      return {
        ...state,
        isLoading: true,
      };
    case contactActionTypes.FETCH_CONTACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        contacts: action.payload,
      };
    case contactActionTypes.FETCH_CONTACT_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    case contactActionTypes.POST_NEW_CONTACT_START:
      return {
        ...state,
        isLoadingPost: true,
      };
    case contactActionTypes.POST_NEW_CONTACT_SUCCESS:
      return {
        ...state,
        isLoadingPost: false,
      };
    case contactActionTypes.POST_NEW_CONTACT_FAIL:
      return {
        ...state,
        isLoadingPost: false,
        errorMsg: action.payload,
      };
    case contactActionTypes.FETCH_BY_ID_CONTACT_START:
      return {
        ...state,
        isLoading: true,
      };
    case contactActionTypes.FETCH_BY_ID_CONTACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        contactDetail: action.payload,
      };
    case contactActionTypes.FETCH_BY_ID_CONTACT_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    case contactActionTypes.DELETE_CONTACT_START:
      return {
        ...state,
        isLoadingDelete: true,
      };
    case contactActionTypes.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        isLoadingDelete: false,
      };
    case contactActionTypes.DELETE_CONTACT_FAIL:
      return {
        ...state,
        isLoadingDelete: false,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default contactReducer;
