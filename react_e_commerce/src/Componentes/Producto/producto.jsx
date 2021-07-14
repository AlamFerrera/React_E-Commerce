import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//import {ProductConsumer} from '../context';

class Producto extends Component {
    
    render(){
        const {img, inCart, title, price} = this.props.producto;
        //id,,img,,
        return(
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={() => console.log('img container')}>
                        <Link to="/detalle">
                            <img src={img} alt="imagen" className="card-img-top" />
                        </Link>
                        <button className="card-btn" disabled={inCart? true : false} onClick={()=>{console.log("Agregado");}}>
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

const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        transition: all 1s linear;
    }

    .card-footer{
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;
    }
    &:hover{
        .card{
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2);
        }
        .card-footer{
            background: rgba(247,247,247);
        }
    }

    .img-container{
        position: relative;
        overflow: hidden;
    }

    .card-img-top{
        transition: all 0.3s linear;
    }

    .img-container:hover .card-img-top{
        transform: scale(1.2);
    }
`;



export default Producto;