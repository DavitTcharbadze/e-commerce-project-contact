import {useState} from "react";
import classes from "../modules/BurgerMenu.module.scss"
import Hamburger from "hamburger-react";
import SearchIcon from "../assets/search-icon.svg";
import {Link} from "react-router-dom";

const BurgerMenu = (props) => {
    const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);

    const burgerClickHandler = () => {
        setToggleBurgerMenu(!toggleBurgerMenu);
    };

    return (

        <>
            <div className={classes['burger-menu-wrapper']}>
                <span onClick={burgerClickHandler}><Hamburger/></span>
            </div>
            <div className={`${classes["menu-wrapper"]} ${
                toggleBurgerMenu && classes["open"]
            }`}>
                <div className={classes["actions-wrapper"]}>
                    <div className={classes["input-wrapper"]}>
                        <input type="text" placeholder="What are you looking for?"/>
                        <img src={SearchIcon} alt="search-icon"/>
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
                </div>
            </div>
        </>
    )
}
export default BurgerMenu
