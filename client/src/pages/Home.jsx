import React, { useState, useEffect } from "react";
import search from "../utils/API";
const categories = [];
const subInfo = []; 
export default function Home() {
      

    

    // function CategoryButton (props) {
    //     return (
    //         <button 
    //         id={props.href}
    //         className="text-blue-500 hover:text-blue-800 py-2 px-4 font-semibold text-lg rounded-lg"
    //         onClick={handleClick}
    //         >{props.category}</button>
    //     )
    // }

    // function SubCategoryButton (props) {
    //     return (
    //         <button 
    //         id={props.href}
    //         className="text-blue-500 hover:text-blue-800 py-2 px-4 font-semibold text-lg rounded-lg"
    //         onClick={
    //             async () => {
    //                 await search.getL3(props.url)
    //                 .then(response => {
    //                     console.log(response);
    //                     // Create a new array to hold the sub-subcategories
    //                     let newSubSubData = [];
    //                     // Loop through the response object
    //                     for (let i in response) {
    //                         // Check if the value is an array (nested array)
    //                         if (Array.isArray(response[i])) {
    //                             // If nested array, push its elements to the newSubSubData array
    //                             newSubSubData.push(['desc', ...response[i]]);
    //                             console.log(newSubSubData);
    //                         } else if (typeof response[i] === 'boolean') {
    //                             // If the value is a boolean, push the key to the newSubSubData array
    //                             newSubSubData.push([i, response[i].toString()]);
    //                             console.log(newSubSubData);
    //                         } else if (typeof response[i] === 'object') {
    //                             // If the value is an object, push the key to the newSubSubData array
    //                             newSubSubData.push([i, JSON.stringify(response[i])]);
    //                             console.log(newSubSubData);
    //                         } else {
    //                             // If not nested array, push the key-value pair to the newSubSubData array
    //                             newSubSubData.push([i, response[i]]);
    //                             console.log(newSubSubData);
    //                         }
    //                     }
    //                     // Set the state with the newSubSubData array
    //                     setSubSubData(newSubSubData);
    //                 })
    //             }
    //         }
    //         >{props.name}</button>
    //     )
    // }

    function SubInfoContainer (props) {
        return (
            <div>
                <h1>{props.name}</h1>
                <p>{props.info}</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Home</h1>
            <h2>Categories</h2>
            {/* {data && data.map((category, index) => (
                <CategoryButton key={index} href={category[0]} category={category[0]} />
            ))}
            <h2>Subcategories</h2>
            {subData && subData.map((category, index) => (
                <SubCategoryButton key={index} name={category.name} url={category.url} />
            ))}
            <h2>SubSubcategories</h2>
            {subSubData && subSubData.map((category, index) => (
                <SubInfoContainer 
                key={index} 
                name={category[0]} 
                /> 
            ))} */}
                
        </div>

    )
}