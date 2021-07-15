import React, {Component} from 'react';
import {ModalContainer} from './modal_styled';
import {ProductConsumer} from '../context';
import {ButtonContainer} from '../Button/button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render(){
        return(
            <ProductConsumer>
                {
                    (value) => {
                        const {modalOpen, closeModal} = value;
                        const {img,title,price} = value.modalProducto;

                        if(!modalOpen){
                            return null;
                        }
                        else{
                           return(
                            <ModalContainer>
                                <div className="container">
                                   <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <h5>Articulo agregado al carrito !</h5>
                                            <img src={img} className="img-fluid" alt="Imagen Producto" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">Precio: ${price}</h5>
                                            <Link to="/">
                                                <ButtonContainer onClick={() => closeModal()}>
                                                        Continuar comprando
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer cart onClick={() => closeModal()}>
                                                        Ir a carrito
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                   </div>
                                </div>
                            </ModalContainer>
                           );
                        }
                    }
                }
            </ProductConsumer>
        );
    };
};