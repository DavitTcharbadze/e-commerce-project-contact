import Header from "../components/Header.jsx";
import axios from "axios";
import {useEffect, useState} from "react";
import ProductsList from "../components/ProductsList.jsx";
import BurgerMenu from "../components/BurgerMenu.jsx";
import Footer from "../components/Footer.jsx";


const Products = (props) => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProductItems = async () => {
            try {
                const response = await axios.get("http://localhost:5500/api/v1/products");
                setProducts(response.data.data);
            } catch (error) {
                console.error("Error fetching menu items:", error);
            }
        }
        fetchProductItems();
    }, []);

    return (
        <>
            <Header menuItems={props.menuItems}/>
            <ProductsList products={products}/>
            <BurgerMenu menuItems={props.menuItems}/>
            <Footer />
        </>
    )
}

export default Products
