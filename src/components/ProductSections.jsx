import classes from '../modules/ProductSections.module.scss';
import { useState } from 'react';
import axios from 'axios';
import ImageCarousel from './ImageCarousel';
const ProductSections = () => {
    const [sectionData, setSectionData] = useState(null);

    const handleSectionClick = async (sectionId) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/v1/sections/${(sectionId)}`);
            setSectionData(response.data.data);
        } catch (error) {
            console.error('Error fetching section data:', error);
        }
    };

    return (
        <div className={classes['sections-wrapper']}>
            <div className={classes['sections']}>
                <div className={classes['box']} onClick={() => handleSectionClick(1)}><h3>Woman's Fashion</h3></div>
                <div className={classes['box']} onClick={() => handleSectionClick(2)}><h3>Man's Fashion</h3></div>
                <div className={classes['box']} onClick={() => handleSectionClick(3)}><h3>Electronics</h3></div>
                <div className={classes['box']} onClick={() => handleSectionClick(4)}><h3>Home & Lifestyle</h3></div>
                <div className={classes['box']} onClick={() => handleSectionClick(5)}><h3>Medicine</h3></div>
                <div className={classes['box']} onClick={() => handleSectionClick(6)}><h3>Sports & Outdoor</h3></div>
                <div className={classes['box']} onClick={() => handleSectionClick(7)}><h3>Baby's & Toys</h3></div>
                <div className={classes['box']} onClick={() => handleSectionClick(8)}><h3>Groceries & Pets</h3></div>
                <div className={classes['box']} onClick={() => handleSectionClick(9)}><h3>Health & Beauty</h3></div>
            </div>
            <div className={classes['line']}></div>
            <ImageCarousel />
            {sectionData && (
                <div>
                    <h2>{sectionData.name}</h2>
                    <h3>{sectionData.description}</h3>
                    <h3>{sectionData.products}</h3>
                </div>
            )}
        </div>
    );
};

export default ProductSections;



