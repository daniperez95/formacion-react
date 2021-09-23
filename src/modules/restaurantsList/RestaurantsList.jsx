import React, { useEffect, useRef } from 'react';
import { getMenus } from "./actions";
import { RestaurantCard } from './components/restaurantCard/RestaurantCard';
import "./restaurantsList.css";
import { connect } from 'react-redux';
import Lottie from 'react-lottie';
import animationData from './restaurant-loading.json';
import { FaBeer } from 'react-icons/fa';
import BaseLayout from '../../components/baseLayout/BaseLayout';
import { useTranslation } from 'react-i18next';

const ITEMS_PER_PAGE = 20;

const RestaurantsList = (props) => {

  const {
    loadMenus,
    menus,
    loading
  } = props;

  const restaurantsRef = useRef();

  const { t } = useTranslation('common');

  useEffect(() => {
    loadMenus(0, ITEMS_PER_PAGE);
  });

  const Items = React.memo(() => <>
    {menus.items.map(menuItem =>
      <RestaurantCard restaurant={menuItem} key={menuItem.id} />
    )}
  </>, [menus]);

  if (restaurantsRef.current) {
    restaurantsRef.current.onscroll = () => {
      const heightToScroll = restaurantsRef.current.scrollHeight - (restaurantsRef.current.offsetHeight + restaurantsRef.current.scrollTop);

      if (heightToScroll < restaurantsRef.current.offsetHeight) {

        loadMenus((menus.currentPage + 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE);
        console.log("Load next page", (menus.currentPage + 1));
      }
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
  };


  return (
    <BaseLayout>
      <>
        {loading && menus.items.length > 0 &&
          <div className="loading-small">
            <FaBeer />
          </div>
        }
        <div className="restaurants" ref={restaurantsRef}>
          {loading && menus.items.length === 0 &&
            <div className="restaurants__loading">
              <div className="loading-icon">
                <Lottie options={defaultOptions}
                  height={150}
                  width={150} />
              </div>
              <div className="loading-title">{t("loading", {
                name : 'Restaurantes'
              })}</div>
            </div>
          }
          <div className="list">
            <Items />
          </div>
        </div>
      </>
    </BaseLayout>
  );
};

export default connect(
  store => ({
    loading: store.restaurantsList.loading,
    menus: store.restaurantsList.menus
  }),
  dispatch => ({
    loadMenus: (start, count) => dispatch(getMenus(start, count))
  })
)(RestaurantsList);
