import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get("http://localhost:5500/api/v1/menus");
                setMenuItems(response.data.data);
            } catch (error) {
                console.error("Error fetching menu items:", error);
            }
        }
        fetchMenuItems();
    }, []);
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home menuItems={menuItems}/>}/>
                    <Route path="/products" element={<Products menuItems={menuItems}/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
