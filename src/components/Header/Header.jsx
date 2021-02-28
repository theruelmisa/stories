import React, { useState, useEffect } from 'react'
import { 
    HeaderContainer, 
    LogoTitle, 
    LogoLink,
    MobileIcon, 
    NavMenu, 
    NavItem,
    NavLinks 
} from './Header.elements';

const links = [
    {
        id: 1,
        name: 'spring',
        route: '/spring'
    },
    {
        id: 2,
        name: 'summer',
        route: '/summer'
    },
    {
        id: 3,
        name: 'autumn',
        route: '/autumn'
    },
    {
        id: 4,
        name: 'winter',
        route: '/winter'
    }
];


const Header = ({ season }) => {
    const [click, setClick] = useState(false);
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {

        window.addEventListener('scroll', handleShowHeader);

        return () => {
            window.removeEventListener('scroll', handleShowHeader);
        };
    }, []);

    const handleShowHeader = () => {
        if (window.scrollY > 100) {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        };
    }
    
    const handleClick = () => setClick(!click);

    const handleCloseMenu = () => setClick(false);

    return (
        <HeaderContainer showHeader>
            <LogoTitle season={season} onClick={handleCloseMenu}>
                <LogoLink to="/">
                    <span>S</span>tories
                </LogoLink>
            </LogoTitle>
            <MobileIcon onClick={handleClick}>
                { click ? 'close' : 'menu' }
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
                {
                    links.map( link => (
                        <NavItem key={link.id} season={link.name}>
                            <NavLinks to={link.route} season={link.name}>
                                {link.name}
                            </NavLinks>
                        </NavItem>
                    ))
                }
            </NavMenu>
        </HeaderContainer>
    )
}

export default Header;
