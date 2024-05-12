import layout from "../modules/Layout.module.scss";
import classes from "../modules/Header.module.scss";
import VectorIcon from "../assets/arrow-down-icon.svg";
import CartIcon from "../assets/cart-icon.svg";
import HeartIcon from "../assets/favorites-icon.svg";
import SearchIcon from "../assets/search-icon.svg";
import {Link} from "react-router-dom";
import {useState} from "react";

const Header = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const onDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className={`${classes["header-wrapper"]}`}>
            <div className={classes["header-top-wrapper"]}>
                <div className={`${classes["header-top"]} ${layout["container"]}`}>
                    <div className={classes["title-wrapper"]}>
                        <p>
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF
                            50%!
                        </p>
                        <p className={classes["shop-now-link"]}>ShopNow</p>
                    </div>
                    <div className={classes["language-select"]} onClick={onDropdownClick}>
                        <p>English</p>
                        <img src={VectorIcon} alt="dropdown-icon"/>
                        {showDropdown && (
                            <div className={classes["dropdown-box"]}>
                                <ul>
                                    <li>Georgian</li>
                                    <li>German</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={classes["header-bottom-wrapper"]}>
                <div className={`${classes["header-bottom"]} ${layout["container"]}`}>
                    <div className={classes["heading"]}>
                        <Link to={"/"}><h1>Exclusive</h1></Link>
                    </div>
                    <nav>
                        <ul>
                            {props.menuItems.map((item) => (

                                (item.show === "true" && (item.onlyMobile === "false" || item.onlyMobile === "true" && window.innerWidth < 1024)) && (
                                    <li key={item._id}>
                                        <Link to={item.slug}>{item.title}</Link>
                                    </li>
                                )
                            ))}
                        </ul>
                    </nav>
                    <div className={classes["actions-wrapper"]}>
                        <div className={classes["input-wrapper"]}>
                            <input type="text" placeholder="What are you looking for?"/>
                            <img src={SearchIcon} alt="search-icon"/>
                        </div>
                        <Link to={"/"}>
                            <img src={HeartIcon} alt="heart-icon"/>
                        </Link>
                        <Link to={"/"}>
                            <img src={CartIcon} alt="cart-icon"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

