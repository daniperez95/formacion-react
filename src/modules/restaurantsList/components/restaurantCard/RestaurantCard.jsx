import "./restaurantCard.css";
import '@material/react-button/dist/button.css';
import "@material/react-chips/dist/chips.css";
import React from 'react';
import Button from '@material/react-button';
import {ChipSet, Chip} from '@material/react-chips';

export const RestaurantCard = (props) => {
    const {
        name,
        phone,
        onlineEnabled,
    } = props.restaurant;

    return (
        <div className="restaurant-card loading-item">
            <div>Carrusel</div>
            <form>
                <div>
                    <ul>
                        <li>
                            <input type="checkbox"/>
                            <span>Nombre plato</span>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <span>Nombre plato 2</span>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <span>Nombre plato 3</span>
                        </li>
                    </ul>
                </div>
                <div className="restaurant-info">
                    <ChipSet>
                      <Chip className="chipsDatos" id='nameDatosR' label={name}/>
                      <Chip className="chipsDatos" id='tlfDatosR' label={`Tlf. ${phone}`}/>
                    </ChipSet>
                    {onlineEnabled &&
                    <div className="btnPedir">
                        <Button outlined={true} raised={true}>
                          Pedir
                        </Button>
                    </div>
                    }
                    {!onlineEnabled &&
                    <div className="btnPedir">
                        <Button disabled={true} outlined={true} raised={true}>
                          Pedir
                        </Button>
                    </div>
                    }
                </div>
            </form>
        </div>
    )
}