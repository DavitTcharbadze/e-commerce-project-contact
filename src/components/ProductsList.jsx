import classes from "../modules/ProductsList.module.scss";
import layout from "../modules/Layout.module.scss";
import StarRating from "../UI/StarRating.jsx";
import QuickViewIcon from "../assets/quick-view.svg";
import FavouritesIcon from "../assets/favorites-icon.svg";
import {useState} from "react";

const ProductsList = (props) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    // Repeat the list of products four times
    const repeatedProductsList = Array.from({length: 4}).map((_, index) => (
        <ul key={index}>
            {props.products.map(product => (
                <li key={product._id}>
                    <div className={classes['product-image']} onMouseEnter={() => setHoveredItem(product._id)}
                         onMouseLeave={() => setHoveredItem(null)}>
                        <div className={classes['product-discount']}>
                            {product.discount && (
                                <div className={classes['product-discount']}>
                                    <p>-{product.discount}%</p>
                                </div>
                            )}
                        </div>
                        <div className={classes['product-icons']}>
                            <img src={FavouritesIcon} alt="favourites-icon"/>
                            <img src={QuickViewIcon} alt="quick-view-icon"/>
                        </div>
                        {hoveredItem === product._id && (
                            <div className={classes['add-to-cart']}>
                                <p>Add To Cart</p>
                            </div>
                        )}
                        <img src={`http://localhost:5500/images/${product.imagePath}`} alt="product-image"/>
                    </div>
                    <div className={classes['product-info']}>
                        <p className={classes['product-title']}>{product.title}</p>
                        <div className={classes["product-price"]}>
                            <p className={classes['discount-price']}>{product.discountPrice}$</p>
                            <p className={classes['real-price']}>{product.price}$</p>
                        </div>
                        <div className={classes['product-rating']}>
                            <StarRating/>
                            <p>({product.rating})</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    ));

    return (
        <div className={`${classes['products-list-wrapper']} ${layout['container']}`}>
            {repeatedProductsList}
        </div>
    );
};

export default ProductsList;


