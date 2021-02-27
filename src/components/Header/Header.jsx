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
                    <NavItem>Spring</NavItem>
                    <NavItem>Summer</NavItem>
                    <NavItem>Winter</NavItem>
                    <NavItem>Fall</NavItem>
                </NavMenu>
            </Nav>
        </HeaderContainer>
    )
}

export default Header;
