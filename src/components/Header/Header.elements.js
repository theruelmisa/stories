import { IoPhonePortrait } from 'react-icons/io5';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    grid-column: center-start / center-end;
    height: 6rem;
    margin-bottom: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const LogoTitle = styled.h1`
    // clamp(min, viewport , max) resize font size depending on viewport
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    font-weight: 300;
    letter-spacing: .15rem;
    text-transform: uppercase;
    color: ${ props => 
        props.season === 'spring' ? 'var(--spring)' : 
        props.season === 'summer' ? 'var(--summer)' :
        props.season === 'autumn' ? 'var(--autumn)' :
        props.season === 'winter' ? 'var(--winter)' :
        'inherit'
    };

    & > span {
        font-size: clamp(3rem, 3vw, 4rem);
        font-weight: bold;
    }
`;

export const Nav = styled.nav`
    // Use this for something later
`

export const NavMenu = styled.ul`
    font-size: 1.4rem;
    display: flex;
    justify-content: space-between;
`;

export const NavItem = styled.li`
    cursor: pointer; // While we don't have links
    margin-left: 5rem;
    padding: 1rem 0;
    letter-spacing: .1rem;
`;

