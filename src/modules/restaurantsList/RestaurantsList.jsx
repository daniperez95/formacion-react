
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';
import { getMenus } from "./actions";
import { RestaurantCard } from './components/restaurantCard/RestaurantCard';
import "./restaurantsList.css";

// En cada carga traer paginas de x tamaño y al estar cerca del final traer la siguiente pagina

const RestaurantsList = (props) => {

  const {
    userInfo,
    loadMenus
  } = props;

  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [count, setCount] = useState(0);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    loadMenus(0, 20);
  }, [menus]);

  useEffect(() => {
    if (reload) {
      loadMenus(0, 20);
    }
  }, [reload]);

  const Items = React.memo(() => <>
    {menus.map(menuItem =>
      <RestaurantCard restaurant={menuItem} key={menuItem.id} />
    )}
  </>, [menus]);

  return (
    <>
      <Header />
      <div>{`Hola ${userInfo ? userInfo.name : ''}`}</div>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>Add count</button>
      </div>
      <button onClick={() => setReload(true)}>Reload</button>
      <div className="restaurants">
        {loading &&
          <div className="loading">Cargando</div>
        }
        {!loading && <Items />}
      </div>
    </>
  );
};

export default connect(
  store => ({
      loading: store.restaurantsList.loading,
      menus : store.restaurantsList.menus
  }),
  dispatch => ({
    loadMenus : (start, count) => dispatch(getMenus(start, count))
  })
)(RestaurantsList);