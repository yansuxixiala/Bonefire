import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Title from '../components/Title';
import useAuthContext from "../context/AuthContext";


function MyFavorites() {
  const { user } = useAuthContext();

  const [myLove, setMyLove] = useState([]);

  useEffect(() => {
    const love = localStorage.getItem('myLove');
    if (love) {
      setMyLove(JSON.parse(love));
    }
  }, []);

  return (
    <Container>
      <Title mainTitle="我的最愛清單" />
      <Row xs={1} md={1} lg={1} className="g-4">
        {myLove.map(item => (
          <Col key={item.id}>
            <div className="card h-100">
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

export default MyFavorites;
