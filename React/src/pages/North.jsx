import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Nav from "../components/Nav.jsx";
import ".//CampIndex.css";
import "bootstrap/dist/js/bootstrap.js";
import Title from "../components/Title";
import ProductList from './ProductList.jsx';
import CampList from './CampList.jsx';
import SearchBar from '../components/SeachBar.jsx';
import axios from '../api/axios';
import { Row, Col, Button, Container } from 'react-bootstrap';
import MyLove from '../components/MyLove';
import BackToTopButton from '../components/BackToTopButton.jsx';

function North() {

   
  const [data, setData] = useState([]);
  const [myLove, setMyLove] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get('api/campsites')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('myLove', JSON.stringify(myLove));
  }, [myLove]);

  useEffect(() => {
    const love = window.localStorage.getItem('myLove');
    if (love) {
      setMyLove(JSON.parse(love));
    }
  }, []);

  const toggleFavorite = (id) => {
    const index = myLove.findIndex(item => item.id === id);
    if (index === -1) {
      const item = data.find(item => item.id === id);
      setMyLove([...myLove, item]);
    } else {
      const newMyLove = [...myLove];
      newMyLove.splice(index, 1);
      setMyLove(newMyLove);
    }
  };
  console.log(filteredData)

  const isFavorite = (id) => {
    return myLove.some(item => item.id === id);
  };

  const handleSearchClick = () => {
    if (search === '') {
      setFilteredData([]);
      console.log(search)
    } else {
      const filteredData = data.filter((item) => {
        return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });
      setFilteredData(filteredData);
    }
  };
  return (
    <div className=''>
      <Header />
      <Nav />
      <br />
      <div className='Northbg1 container mt-5 mb-5'>
        <div></div>
        <SearchBar setSearch={setSearch} handleSearchClick={handleSearchClick} />
        {filteredData.length > 0 ? (
          <CampList data={filteredData} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
        ) : (
          <>
            {/* <Title mainTitle='北部露營區' /> */}
            <br />
            {/* <CampList data={data} toggleFavorite={toggleFavorite} isFavorite={isFavorite} /> */}
            <br />
          </>
        )}
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default North;
