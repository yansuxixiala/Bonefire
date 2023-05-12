import { Link,Navigate } from "react-router-dom";
import Title from "../components/Title";
import QuantityBtn from "../components/QuantityBtn";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import styles from'../pages/ProductList.module.css'
import BackToTopButton from '../components/BackToTopButton.jsx';
import useAuthContext from "../context/AuthContext";

export default function Checkout() {
    const { user } = useAuthContext();
    
    let {cartItems} = useContext(CartContext)

   let cartEmpty = cartItems.length<=0 ? true : false
   let grandTotal = cartItems.reduce((total, product)=>{
        return total += product.price*product.quantity
   },0)
   const freeShippingPrice = 300

   return user?(
        <div>
            <Title mainTitle="你的購物車" />

            {
                cartEmpty &&
                <div>
                    購物車現在沒有商品<br/>
                    <Link to="/product">去產品頁看看吧</Link>
                </div>
            }

            {
                !cartEmpty &&
                <div>
                    <div id="cartSection">
                        {
                        
                        /* 產品列表*/
                            cartItems.map(product=>(
                                <div key={product.id}>
                                <div><img className={styles.campimg} src={product.image} alt="productimg"></img></div>
                                {product.name}<br />
                                {product.description}<br />
                                {product.price}<br />
                                購買數量{product.quantity}
                                <QuantityBtn />
                                </div>
                            ))
                        }
                    </div>
                    <div id="checkOutSection" >
                        <div>全部貨品總共</div>
                        <div>{grandTotal}元</div>
                        {
                        /*價錢總數+免費送貨*/
                            grandTotal >= freeShippingPrice ?
                            <div>免外送費</div> :
                            <div>滿${freeShippingPrice}免費外送<br />
                            還差${freeShippingPrice-grandTotal}元</div>
                        }
                    </div>
                </div>
            }
<BackToTopButton />
        </div>
        
   ):(
    <>
    {alert("登入後才能訪問")}
    <Navigate to="/"/>
    </>
   );
   
        
    
};