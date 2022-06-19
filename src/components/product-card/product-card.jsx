import './product-card.scss'
import Button from "../button/button";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const ProductCard = ({product}) => {
  const {name, price, imageUrl} = product
  const {addItemToCart} = useContext(CartContext)
  const addProductToCart = () => addItemToCart(product)

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' btnProps={{onClick: addProductToCart}}>添加到购物车</Button>
    </div>
  )
}

export default ProductCard
