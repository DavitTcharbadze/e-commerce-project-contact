import React from 'react'
import {FaStar} from 'react-icons/fa'


const StarRating = () => {
    return (
        <>
            {[...Array(5)].map(star => {
                return (
                    <FaStar color="#FFAD33"/>
                )
            })}
        </>
    )
}
export default StarRating
