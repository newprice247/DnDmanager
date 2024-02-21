import React, { useState, useEffect } from "react";
import search from "../utils/API";
const categories = [];
export default function Home() {
    const [data, setData] = useState([]);
    const [subData, setSubData] = useState([]);
    const [subSubData, setSubSubData] = useState([]);
    useEffect(() => {
        search.getL1()
            .then(response => {
                for (let i in response) {
                    categories.push([i, response[i]]);
                }
                setData(categories);

            })
    }  , []);

    const handleClick = (e) => {
        e.preventDefault();
        const category = e.target.id;
        search.getL2(category)
            .then(response => {
                console.log(response.results);
                setSubData(response.results);

            })

    }

    

    function CategoryButton (props) {
        return (
            <button 
            id={props.href}
            className="text-blue-500 hover:text-blue-800 py-2 px-4 font-semibold text-lg rounded-lg"
            onClick={handleClick}
            >{props.category}</button>
        )
    }

    function SubCategoryButton (props) {
        return (
            <button 
            id={props.href}
            className="text-blue-500 hover:text-blue-800 py-2 px-4 font-semibold text-lg rounded-lg"
            onClick={
                () => {
                    search.getL3(props.url)
                        .then(response => {

                            console.log(response);
                            setSubSubData(response.results);
                        })
                }
            }
            >{props.name}</button>
        )
    }

    return (
        <div>
            <h1>Home</h1>
            <h2>Categories</h2>
            {data && data.map((category, index) => (
                <CategoryButton key={index} href={category[0]} category={category[0]} />
            ))}
            <h2>Subcategories</h2>
            {subData && subData.map((category, index) => (
                <SubCategoryButton key={index} name={category.name} url={category.url} />
            ))}
            <h2>SubSubcategories</h2>
            {subSubData && subSubData.map((category, index) => (
                <p key={index}>{category.name}</p>
            ))}
                
        </div>

    )
}