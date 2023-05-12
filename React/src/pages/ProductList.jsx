import { useState } from 'react'
import { Link, Navigate } from "react-router-dom"
import styles from '../pages/ProductList.module.css'
import QuantityBtn from '../components/QuantityBtn'
import "bootstrap/dist/css/bootstrap.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import useAuthContext from "../context/AuthContext";
import BackToTopButton from '../components/BackToTopButton.jsx';

export default function ProductList() {
    const { user } = useAuthContext();

    let ProductList = [
        {"id" : 1, "name" : "白色短T", "price" : 200, "image" : "https://img.onl/TmfRx"},
        {"id" : 2, "name" : "深駝色短T", "price" : 200, "image" : "https://img.onl/9m2ycx"},
        {"id" : 3, "name" : "淺橄欖綠短T", "price" : 200, "image" : "https://img.onl/sIvIhR"},
        {"id" : 4, "name" : "深卡其帽T", "price" : 200, "image" : "https://img.onl/LQxsJR"},
    ]

    return user? (
        <div>
        <Header />
        <Nav />
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {ProductList.map((product) => (
                    <div className="col" key={product.id}>
                        <div className={`card ${styles.productstyle}`}>
                            <Link to={`/product/${product.id}`}>
                                <img src={product.image} className={`w-100 card-img-top ${styles.campimg}`} alt="Product Image" />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">價格: {product.price}</h6>
                                <p className="card-text">{product.description}</p>
                                <QuantityBtn productInfo={product} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
        <BackToTopButton />
        </div>
    ):(
        <>
        {alert("登入會員才能進入")}
        <Navigate to="/"/>
        </>
    );
}
