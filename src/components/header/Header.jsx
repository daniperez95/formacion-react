import "./header.css";
import '@material/react-button/dist/button.css';
import "@material/react-chips/dist/chips.css";
import { connect } from 'react-redux';
import { logout } from "../../modules/login/actions";
import {
    Link
  } from "react-router-dom";
import React from 'react';
import Button from '@material/react-button';
import {ChipSet, Chip} from '@material/react-chips';

const Header = (props) => {
    const {
        userInfo
    } = props;

    return (
        <div className="header">
            <span className="logo"></span>
            <ChipSet>
              <Chip className="user" id='user' label={`${userInfo.name} (${userInfo.rol})`}/>
            </ChipSet>
            <div className="menu">
                <Link to="/">
                    <div className="menu-item">
                        <Button outlined="true" raised="true">
                          Inicio
                        </Button>
                    </div>
                </Link>
                <Link to="/management">
                    <div className="menu-item">
                        <Button outlined="true" raised="true">
                          Gestión
                        </Button>
                    </div>
                </Link>
                <div className="menu-item" onClick={() => props.logout()}>
                    <Button outlined="true" raised="true">
                      Logout
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default connect(
    // Que quiero mapear del estado como props¿?
    // - props.userInfo (Sera leido del estado de redux store.login.userInfo)
    // - props.isLoadingRestaurants (store.restaurtsList.loading)
    store => ({
        userInfo: store.login.userInfo,
        isLoadingRestaurants : store.restaurantsList.loading
    }),

    // Que quiero lanzar como accion ¿?
    // - props.reduxLogout = dispatch(reduxLogout)
    dispatch => ({
        logout : () => dispatch(logout())
    })
)(Header);