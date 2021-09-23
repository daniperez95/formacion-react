import {
    GET_MENUS_REQUEST,
    GET_MENUS_RESPONSE
  } from './actions';
  
  const initialState = {
    menus: {
        currentPage : 0,
        items : [],
        totalItems : 0
    },
    loading: false
  };
  
  const restaurantsList = (state = initialState, action) => {
    switch (action.type) {
      case GET_MENUS_REQUEST:
        return {
          ...state,
          loading : true
        };
      case GET_MENUS_RESPONSE:
        return {
            ...state,
            loading : false,
            menus :  {
                currentPage : action.menus.start / action.menus.limit,
                items : state.menus.items.concat(action.menus.results),
                totalItems : action.menus.count
            }
          };
      default:
        return state;
    }
  };
  
  export default restaurantsList;