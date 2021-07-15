import React, {Component} from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../Button/button';

class Detalle extends Component{
    render(){
        return(
           <ProductConsumer>
               {value => {
                   const {id, company, img, info, price, title, inCart} = value.detailProduct;
                   return(
                       <>
                      <div className="container py-5">
                          {/* Title */}
                          <div className="row">
                              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                  <h1>{title}</h1>
                              </div>
                          </div>
                      
                      {/* Product Info */}
                      <div className="row">

                          {/* Col1 */}
                          <div className="col-10 mx-auto col-md-6">
                              <img src={img} className="img-fluid" alt="producto" />
                          </div>

                          {/* Col2 */}
                          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize px-4">
                              <h2>Modelo: {title}</h2>
                              <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Hecho por: <span className="text-uppercase">{company}</span></h4>
                              <h4 className="">
                                  <strong>Precio: <span>$</span>{price}</strong>
                              </h4>
                              <p className="text'capitalize font-weight-bold mt-3 mb-0">Información</p>
                              <p className="text'muted lead text-justify">{info}</p>
                              <Link to="/">
                                  <ButtonContainer>
                                      Volver a productos
                                  </ButtonContainer>
                              </Link>
                                <ButtonContainer disabled={inCart? true : false}
                                                 cart
                                                 onClick={()=>{
                                                     value.addToCart(id);
                                                 }} >
                                    {
                                        inCart ? "En Carrito" : "Agregar a carrito"
                                    }
                                </ButtonContainer>
                          </div>
                      </div>
                    </div>
                    </>
                   );
               }}
           </ProductConsumer>
        );
    };
}

export default Detalle;