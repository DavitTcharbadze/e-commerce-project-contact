import Header from '../components/Header.jsx'
import BurgerMenu from "../components/BurgerMenu.jsx";
import ProductSections from '../components/ProductSections.jsx';

const Home = (props) => {


    return (
        <div>
            <Header menuItems={props.menuItems}/>
            <BurgerMenu menuItems={props.menuItems}/>
            <ProductSections ></ProductSections>
        </div>
    )
}

export default Home