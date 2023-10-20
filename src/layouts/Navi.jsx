import React,{useState} from 'react'
import CartSummary from './CartSummary'
import {Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function Navi() {

  const {cartItems} = useSelector(state => state.cart)
  const [isAuthenticated,setIsAuthecticated] = useState(true);
  const navigate = useNavigate();

    function handleSignOut(params) {
      setIsAuthecticated(false);
      navigate("/")
      
   }

   function handleSignIn(params){
    setIsAuthecticated(true);
   }

  return (
    <div>
        <Menu inverted fixed='top'>
            <Container>
            <Menu.Item
          name='home'
          as={NavLink} to="/"
        />
        <Menu.Item
          name='messages'
        />
        <Menu.Menu position='right'>
          {cartItems.length>0 && <CartSummary/>}
          {isAuthenticated ? <SignedIn signOut={handleSignOut}/> : <SignedOut signIn={handleSignIn}/>}
          
        </Menu.Menu>tt
            </Container>
      </Menu>
    </div>
  )
}
