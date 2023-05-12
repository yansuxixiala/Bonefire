import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Button, Container } from 'react-bootstrap';
import MyLove from '../components/MyLove'
import SearchBar from '../components/SeachBar';
import BackToTopButton from '../components/BackToTopButton.jsx';


function MyComponent() {
  const [data, setData] = useState([]);
  const [myLove, setMyLove] = useState([]);

  useEffect(() => {
    axios.get('/campsite')
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

  return (
    <Container style={{ padding: '20px' }}>

      <Row xs={1} md={2} lg={4} className="g-4">
        {data.map(item => (
          <Col key={item.id}>
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
        ))}
      </Row>
    </Container>
  );
}

export default MyComponent;
