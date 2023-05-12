import React, { Component, useState, useEffect, useContext } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyLovePage from '../pages/MyLovePage';
import LoginButton from './loginButton';
import useAuthContext from "../context/AuthContext";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFavoritesModal: false
    }
    this.handleFavoritesModalClose = this.handleFavoritesModalClose.bind(this);
    this.handleFavoritesModalShow = this.handleFavoritesModalShow.bind(this);
  }

  handleFavoritesModalClose() {
    this.setState({ showFavoritesModal: false });
  }

  handleFavoritesModalShow() {
    this.setState({ showFavoritesModal: true });
  }

  render() {
    return (
      <header className="position-fixed-top">
        <div className="container">
          <Link to="/"><img id='logo-img' src="https://img.onl/BTUc0G" className="w-25" alt="Logo"></img></Link>
          <LoginButton />
          <div id='sm-img-group' className='font-size'>
            <Link to="/checkout"><img id='sm-img' src="https://img.onl/gTX7IE" alt="購物車" /></Link>
            <UserProfileLink />
            <img id='sm-img' src="https://img.onl/qYF38d" alt="我的最愛" onClick={this.handleFavoritesModalShow} />
          </div>
          <hr />
        </div>
        <Modal show={this.state.showFavoritesModal} onHide={this.handleFavoritesModalClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <MyLovePage />
            <MyFavorites />
          </Modal.Body>
        </Modal>
      </header>
    )
  }
}

function UserProfileLink() {
  const { user } = useAuthContext();

  if (user) {
    return (
      <Link to="/profile">
        <img id='sm-img' src="https://img.onl/n8r0nE" alt="個人資料" />
      </Link>
    );
  }

  return null;
}

function MyFavorites() {
  const [myLove, setMyLove] = useState([]);

  useEffect(() => {
    const love = localStorage.getItem('myLove');
    if (love) {
      setMyLove(JSON.parse(love));
    }
  }, []);

  return null;
}

export default Header;
