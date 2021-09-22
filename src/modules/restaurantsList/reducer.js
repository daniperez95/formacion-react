import {
  GET_MENUS_REQUEST,
  GET_MENUS_RESPONSE
} from './actions';

const initialState = {
  menus: [],
  loading: true
};

const restaurantsList = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENUS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_MENUS_RESPONSE:
      return {
        ...state,
        loading: false,
        menus: action.menus
      };
    default:
      return state;
  }
};

export default restaurantsList;