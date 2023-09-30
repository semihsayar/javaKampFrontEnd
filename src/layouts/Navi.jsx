import React,{useState} from 'react'
import CartSummary from './CartSummary'
import {Container, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navi() {

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
          <CartSummary/>
          {isAuthenticated ? <SignedIn signOut={handleSignOut}/> : <SignedOut signIn={handleSignIn}/>}
          
        </Menu.Menu>
            </Container>
      </Menu>
    </div>
  )
}
