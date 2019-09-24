import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { auth } from '../../firebase/firebase.utils'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'
import { seletcCurrentUser } from '../../redux/user/user.selecter'
import { selectCartHidden } from '../../redux/cart/cart.selecter'

const Header = ({ currentUser, hidden }) => {
  return(
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {
          currentUser ?
          <div className="option" style={{ cursor: "pointer" }} onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        }
        <CartIcon />
      </div>
      {
        hidden ? null :
        <CartDropdown />
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: seletcCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)