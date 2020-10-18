import React, { useEffect, useState } from 'react'
import data from "../data/Data.json"
import RecipeReviewCard from '../PackCard/PackCard'
import axios from "axios";

// https://formulae.brew.sh/api/formula.json


function AppList() {
    const [apps, setApps] = useState([]);  
    
    useEffect(()=>{
        axios.get("data.json")
        .then(response => {
            setApps(response.data.results)
        })
})
    return(
        <ul>        
            {apps.map(app => (
        <li key={app.name}>
          <div>{app.name}</div>
        </li>
      ))}
            </ul>        
    )
    // useEffect(() => {async function fetchData(){
    //     const result = await axios('https://formulae.brew.sh/api/formula.json');
    //     setApps(result.data)
    // }
    //     fetchData();
    // }, []);
}

export default AppList