import React, { useState } from 'react';
import axios from '../api/axios';
import useAuthContext from "../context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import { Form, Button, Card } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const UserUpdateForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, logout } = useAuthContext();
  const [id, setId] = useState(user.id);
  const [isAccountDeleted, setIsAccountDeleted] = useState(false);
  const [orders, setOrders] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`api/update/${id}`, {
        name,
        email,
        password
      });

      alert('資料已更新');
      // handle success response
    } catch (error) {
      console.error(error);
      // handle error response
    }
  };

  const handleSearchOrders = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get(`api/orders/${email}`, {
        params: {
          name,
        },
      });
  
      const filteredOrders = response.data.filter(
        (order) => order.email === email
      );
  
      setOrders(filteredOrders);
    } catch (error) {
      console.error(error);
      // handle error response
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await axios.delete(`api/delete/${id}`);
      // handle success response
      logout(); // Log out the user after deleting the account
      setIsAccountDeleted(true);
      // Perform any additional actions after deleting the account
    } catch (error) {
      console.error(error);
      // handle error response
    }
  };

  if (!user) {
    alert("Please log in first!");
    return <Navigate to="/" />;
  }

  if (isAccountDeleted) {
    alert('帳號已刪除');
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Nav />
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="w-50 p-4 border rounded shadow">
          <Form>
            {/* Form inputs */}
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              更新你的資料
            </Button>
            <Button variant="danger" type="button" onClick={handleDeleteAccount}>
              刪除帳號
            </Button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
              <Button variant="primary" type="button" onClick={handleSearchOrders}>
                查詢訂單
              </Button>
              <Button variant="danger" type="button">
                刪除訂單
              </Button>
            </div>
          </Form>
          <hr />
          {/* Display Orders */}
          <Card>
            <Card.Body>
              <Card.Title>訂單列表</Card.Title>
              {orders.length === 0 ? (
                <p>No orders found.</p>
              ) : (
                <ul>
                  {orders.map((order) => (
                    <li key={order.email}>
                      <p>訂單編號: {order.id}</p>
                      <p>姓名: {order.name}</p>
                      <p>電子郵件: {order.email}</p>
                      <p>日期: {order.date}</p>
                      <p>時間: {order.name}</p>
                      <p>人數: {order.partySize}</p>
                      {/* Render other order details */}
                    </li>
                  ))}
                </ul>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserUpdateForm;

