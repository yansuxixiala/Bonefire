import { useState } from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import axios from '../api/axios';

export default function Reservation() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    partySize: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    email: false,
    date: false,
    time: false,
    partySize: false,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      axios.post('api/orders', formData)
        .then(response => {
          setShowModal(true);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      setFormErrors(errors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "partySize") {
      // 將非正數（包括 0 和負數）的輸入更新為空字串
      updatedValue = value.replace(/[^1-9]/g, "");
    }

    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleInputChangeDate = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "date") {
      // 檢查選擇的日期是否過去
      const currentDate = new Date().toISOString().split("T")[0];
      if (value < currentDate) {
        setFormErrors({ ...formErrors, date: true });
      } else {
        setFormErrors({ ...formErrors, date: false });
      }
    }

    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      partySize: "",
    });
    setFormErrors({
      name: false,
      phone: false,
      email: false,
      date: false,
      time: false,
      partySize: false,
    });
  };

  const validateForm = () => {
    const errors = {};
    for (const key in formData) {
      if (formData[key].trim() === "") {
        errors[key] = true;
      }
    }
    return errors;
  };

  return (
    <div>
      <Header />
      <Nav />
      <Container className="my-5  ">
        <h1 className="text-dark">線上預約</h1>
        <Form onSubmit={handleFormSubmit} >
          <Form.Group className="mb-3 " controlId="formName">
            <Form.Label>姓名</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="請輸入您的姓名"
              value={formData.name}
              onChange={handleInputChange}
              isInvalid={formErrors.name}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.name && "請輸入姓名"}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>電話</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="請輸入您的電話"
              value={formData.phone}
              onChange={handleInputChange}
              isInvalid={formErrors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.phone && "請輸入電話"}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>電子郵件</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="請輸入您的電子郵件"
              value={formData.email}
              onChange={handleInputChange}
              isInvalid={formErrors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.email && "請輸入電子郵件"}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>日期</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChangeDate}
              isInvalid={formErrors.date}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.date && "請選擇未來的日期"}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label>時間</Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChangeDate}
              isInvalid={formErrors.time}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.time && "請選擇時間"}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPartySize">
            <Form.Label>人數</Form.Label>
            <Form.Control
              type="number"
              name="partySize"
              placeholder="請輸入人數"
              value={formData.partySize}
              onChange={handleInputChange}
              isInvalid={formErrors.partySize}
            />
            <Form.Control.Feedback type="invalid">
              {formErrors.partySize
                ? "請輸入大於 0 的正整數"
                : "請輸入人數"}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              確認預約
            </Button>
          </div>
        </Form>
      </Container>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>預約成功</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>預約資訊如下：</p>
          <p>姓名：{formData.name}</p>
          <p>電話：{formData.phone}</p>
          <p>電子郵件：{formData.email}</p>
          <p>日期：{formData.date}</p>
          <p>時間：{formData.time}</p>
          <p>人數：{formData.partySize}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            關閉
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

