import React from 'react';
import { StyledMenu, WiDiv } from './menu.styled';
import { bool } from 'prop-types';
import { NavLink } from 'react-router-dom';
import blur from '../../../assets/img/blur.png'

const Menu = ({open, setOpen}) => {
    return (
        <StyledMenu open={open} onClick={() => setOpen(!open)}>
            <NavLink onClick={() => setOpen(!open)} to="/">
                Komnata
            </NavLink>
            <NavLink onClick={() => setOpen(!open)} to="/About">
                About
            </NavLink>
            <NavLink onClick={() => setOpen(!open)} to="/Cases">
                Selected works
            </NavLink>
            <NavLink onClick={() => setOpen(!open)} to="/Contacts">
                Contacts
            </NavLink>
        </StyledMenu>
    )
}
Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;
