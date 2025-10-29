import React, { Children } from "react";
import PropTypes from "prop-types";
import './Item.css';

const Item = ({item, onAddToCart}) => {
    return(
    <div className="Item">

        <div className="Item-left">
            <div className="Item-image">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="Item-title">
                {item.name}
            </div>
            <div className="Item-description">
                {item.description}
            </div>
        </div>

        <div className="Item_right">
            <div className="Item-price">
                ${item.price}
            </div>
            {Children}
        </div>
    </div>
    )
}

Item.propTypes ={
    item: PropTypes.object.isRequired,
};

export default Item;