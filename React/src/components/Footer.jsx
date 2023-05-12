import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../pages/CampIndex.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={4} md={6}>
            <h5>關於我們</h5>
            <p className="text-muted">愛露營的一群人.</p>
          </Col>
          <Col lg={3} md={6} className="mt-4 mt-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link className="text-light" to="/">首頁</Link></li>
              <li><Link className="text-light" to="/North">推薦露營區</Link></li>
              <li><Link className="text-light" to="/food1">精選菜單</Link></li>
              <li><Link className="text-light" to="/contact">線上預約</Link></li>
              <li><Link className="text-light" to="/contact">周邊購買</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mt-4 mt-lg-0">
            <h5>關注我們</h5>
            <ul className="list-unstyled d-flex justify-content-between">
              <li><a className="text-light footer-icon" href="https://www.facebook.com"><FaFacebookF size={32} /></a></li>
              <li><a className="text-light footer-icon" href="https://www.twitter.com"><FaTwitter size={32} /></a></li>
              <li><a className="text-light footer-icon" href="https://www.instagram.com"><FaInstagram size={32} /></a></li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-light mt-5" />
        <p className="text-center text-muted mt-4">© Jay_Go_On_The_Picnic</p>
      </Container>
    </footer>
  );
};

export default Footer;
