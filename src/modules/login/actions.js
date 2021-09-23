import { Config } from "../../config/Config";

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_RESPONSE = 'USER_LOGIN_RESPONSE';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export const loginUser = (login, password) => {
    if(login === ''){
        return {
            type : USER_LOGIN_ERROR,
            message : 'Login cannot be empty'
        }
    }

    return dispatch => {
        dispatch({
          type: USER_LOGIN_REQUEST
        });

        // Indicar a Redux que estamos cargando
        return fetch(Config.backendBaseUrl + '/login', {
            method : 'post',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                login,
                password
            })
        }).then(response  => response.json()).then(userInfo => {
            dispatch({
                type: USER_LOGIN_RESPONSE,
                userInfo
            });
        });
    }
}

export const logout = () => {
    // Lanzar una accion que interprete redux para borrar del estado global el atributo login.userInfo seteando a null
    return {
        type : LOGOUT,
        extraInfo : 'logout',
        data : null,
        name : "sss"
    }
}