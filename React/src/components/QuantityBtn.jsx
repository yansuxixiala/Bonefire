import { useContext, useState } from "react"
import { CartContext } from "../../CartContext"
export default function QuantityBtn(productInfo) {
    
    
    const {cartItems, setCartItems}= useContext(CartContext)
    //購物車內有無該產品
    let productIndexInCart = cartItems.findIndex((element)=>{
        console.log(cartItems)
        return element.id === productInfo.id
    })
    //findIndex
    //如果該購物車找到該件商品 => 返回索引位置 0, 1 ,2 , 3......
    //該件產品沒有被加入過去購物車 => 返回 -1

    let [numInCart,setNumIncart] = useState(
        (productIndexInCart===-1)? 0 :cartItems[productIndexInCart].quantity
    )

    const handleAdd = ()=>{

        if(productIndexInCart===-1)
        {console.log(productInfo)
            //購物車本身沒有 在cartItems array中加個新element (object)
            setCartItems(
            
                [{         
                id:productInfo.id,
                name:productInfo.name,
                image:productInfo.image,
                price:productInfo.price,
                description:productInfo.description,
                quantity:1
                    
            },

             ...cartItems ]
            
            )
        }
        else
        {   console.log(productInfo)
            //購物車有該產品 只加個quantity
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity++
            setCartItems(newCartArray)
        }
        setNumIncart(numInCart+1)
    }

    const handleSubtract = ()=>{
        
        if(cartItems[productIndexInCart].Quantity===1)
        {
            //購在購物車中只剩一件的話 remve object 
            let newCartArray = [...cartItems]
            newCartArray.splice(productIndexInCart,1)
            setCartItems(newCartArray)
        }
        else
        {
            //只減個quantity
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].Quantity--
            setCartItems(newCartArray)

        }
        setNumIncart(numInCart-1)
    }

    
    return (
        <div>
            {
                (numInCart === 0) ?
            <div onClick={handleAdd}>加入{productInfo.name}購物車</div> :
            <div>
                <span onClick={handleSubtract}>-</span>
                    {numInCart}件
                <span onClick={handleAdd}>+</span>
            </div>
            }
        </div>
    )
}