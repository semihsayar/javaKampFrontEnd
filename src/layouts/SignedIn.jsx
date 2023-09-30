import React from 'react'
import { Dropdown, DropdownItem, Image, MenuItem } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
     <MenuItem>
            <Image avatar spaced="right" src="https://fikirturu.com/wp-content/uploads/2023/05/260520231-1080x720.jpg"/>
        <Dropdown pointing="top left" text='Mauro'>
            <Dropdown.Menu>
                <DropdownItem text="Bilgilerim" icon="info"/>
                <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
            </Dropdown.Menu>
        </Dropdown>
     </MenuItem>
    </div>
  )
}
