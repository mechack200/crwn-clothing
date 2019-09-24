import React from 'react'
import { connect } from 'react-redux'

import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/CustomButton.component'
import { selectCartItems } from '../../redux/cart/cart.selecter'

import './cart-dropdown.styles.scss'
import { createStructuredSelector } from 'reselect'

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length 
        ? cartItems.map(item => <CartItem key={item.id} item={item}/>)
        : <span className='empty-message'>Your cart is empty</span>
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CartDropdown)