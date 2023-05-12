import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Button, Container } from 'react-bootstrap';
import MyLove from '../components/MyLove'
import SearchBar from '../components/SeachBar';


function MyComponent() {
  const [data, setData] = useState([]);
  const [myLove, setMyLove] = useState([]);
  const [search, setSearch] = useState('');
  // const [filteredData, setFilteredData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/campsites')
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

  const isFavorite = (id) => {
    return myLove.some(item => item.id === id);
  };


  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }


  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleSearchClick = () => {
    if (search === '') {
      alert('請輸入關鍵字')


    } else {
      const filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
      console.log(search)
      setFilteredItems(filteredData);
    }
  }

  // const handleSearchClick = (event) => {
  //   setSearch(event.target.value);
  //   const filteredItems = data.filter((item) => {
  //     return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  //   });
  //   setFilteredItems(filteredItems);
  // };

  return (
    <Container style={{ padding: '20px' }} className='text-center w-100' >
      <input type="text" value={search} onChange={handleSearchChange} placeholder='輸入想搜尋的露營區' className='w-50  mb-5'/>
      <Row xs={1} sm={2} md={4} lg={1} className="justify-content-center">
        {filteredData.map((item) => {
          return (
            <Col key={item.id} style={{ margin: '10px' }} xs={12} sm={6} md={4} lg={3}>
              <div className="card h-100">
                <img
                  src={isFavorite(item.id) ? "https://img.onl/x0aD4m" : "https://img.onl/vbrAIX"}
                  alt="我的最愛"
                  onClick={() => toggleFavorite(item.id)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    cursor: "pointer",
                  }}
                />
                <img src={item.img} alt={item.title} className="card-img-top img-fluid" style={{ height: "250px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
                <div className="card-footer text-center">
                  <Button variant="success">了解更多</Button>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );

}

export default MyComponent;
