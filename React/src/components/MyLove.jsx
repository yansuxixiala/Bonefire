
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Mylove() {
    const [isFavorite, setIsFavorite]= useState(false);
    const [data, setData] = useState([]);

      useEffect(() => {
        axios.get('http://localhost:3001/campsite')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const addToLocalStorage = ()=>{
      localStorage.setItem('myLove',JSON.stringify(data))
      console.log(localStorage.getItem('myLove'))
    }

    return (
        <span>
        <img
          src={isFavorite ? "https://img.onl/x0aD4m" : "https://img.onl/vbrAIX"}
          alt="我的最愛"
          onClick={() => {
            toggleFavorite();
            addToLocalStorage();
        }}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
/>      
        <span
          
        >
        </span>
        </span>  
            
    )


}

