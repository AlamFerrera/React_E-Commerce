import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import Logo from '../../logo.svg';
import {ButtonContainer, NavWrapper} from '../Button/button';

class NavBar extends Component {
    render(){
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-3">
                <Link to="/">
                    <img src={Logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ms-5">
                        <Link to="/" className="nav-link">
                        Productos
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ms-auto">
                    <ButtonContainer>
                       <span className="me-2"> {/* me == mr (bootstrap 5.0) */}
                            <i className="fas fa-cart-plus"></i>
                       </span>
                        Carrito
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    };
}

export default NavBar;