import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';
import {ProductWrapper} from './producto_styled';
import { ProductConsumer } from '../context';

class Producto extends Component {
    
    render(){
        const {id, img, inCart, title, price} = this.props.producto;
        
        return(
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {
                            (value) => (
                            <div className="img-container p-5" onClick={()=>{
                                 value.handleDetail(id);
                             }}>
                                <Link to="/detalle">
                                    <img src={img} alt="imagen" className="card-img-top" />
                                </Link>
                                <button className="cart-btn" 
                                        disabled={inCart? true : false} 
                                        onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                    {inCart? (
                                        <p className="text-capitalize mb-0" disabled>En Carrito</p>
                                    )
                                    :   
                                    (
                                        <i className="fas fa-cart-plus"></i>
                                    )
                                }
                                </button>
                            </div>
                            )
                        }
                    </ProductConsumer>

                    {/* Card Footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    };
}

Producto.propTypes = {
    producto: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}



export default Producto;