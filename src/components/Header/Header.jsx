import React from 'react'
import { 
    HeaderContainer, 
    LogoTitle, 
    Nav, 
    NavMenu, 
    NavItem 
} from './Header.elements';

const Header = () => {
    return (
        <HeaderContainer>
            <LogoTitle><span>S</span>tories</LogoTitle>
            <Nav>
                <NavMenu>
                    <NavItem>spring</NavItem>
                    <NavItem>summer</NavItem>
                    <NavItem>autumn</NavItem>
                    <NavItem>winter</NavItem>
                </NavMenu>
            </Nav>
        </HeaderContainer>
    )
}

export default Header;
