import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
    grid-column: center-start / center-end;
    height: 6rem;
    margin-bottom: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: sticky;
    top: 0;
    z-index: 2;

    background-color: ${({ showHeader }) => ( showHeader ? 'var(--white)' : 'inherit')};

    @media screen and (max-width: 960px) {
        grid-column: full-start / full-end;
        margin: 0 2rem;
    }
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

    & span {
        font-size: clamp(3rem, 3vw, 4rem);
        font-weight: bold;
    }

    @media screen and (max-width: 960px) {
        transform: translateX(-2rem);
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        font-size: 1.6rem;
        cursor: pointer;
    }
`;


export const NavMenu = styled.ul`
    font-size: 1.4rem;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 6rem;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.3s ease;
        background: var(--white);
    }
`;

export const NavItem = styled.li`
    cursor: pointer; // While we don't have links
    margin-left: 5rem;
    padding: 1rem 0;
    letter-spacing: .1rem;
    height: 100%;
    border-bottom: 2px solid transparent;
    transition: all .5s ease;

    &:hover {
        border-color: ${ props => 
            props.season === 'spring' ? 'var(--spring)' : 
            props.season === 'summer' ? 'var(--summer)' :
            props.season === 'autumn' ? 'var(--autumn)' :
            props.season === 'winter' ? 'var(--winter)' :
            'inherit'
        };
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        margin-left: 0;
        padding: 0;

        &:hover {
            border: none;
        }

        & > * {
            color: var(--black);
        }
    }
`;

export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const NavLinks = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            font-weight: 700;
            color: var(--white);
            background-color: ${ props => 
                props.season === 'spring' ? 'var(--spring)' : 
                props.season === 'summer' ? 'var(--summer)' :
                props.season === 'autumn' ? 'var(--autumn)' :
                props.season === 'winter' ? 'var(--winter)' :
                'inherit'
            };
            transition: all 0.3s ease;

        }
    }

    &.active {
        font-weight: 700;
        color: ${ props => 
            props.season === 'spring' ? 'var(--spring)' : 
            props.season === 'summer' ? 'var(--summer)' :
            props.season === 'autumn' ? 'var(--autumn)' :
            props.season === 'winter' ? 'var(--winter)' :
            'inherit'
        };
    }
`;


