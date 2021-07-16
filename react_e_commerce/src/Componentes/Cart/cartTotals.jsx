import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function cartTotals({value}) {

    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;

    return (
        <Fragment>
            <div className="container-fluid px-5">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-10 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                                    type="button"
                                    onClick={() => clearCart()}>
                                Limpiar carrito
                            </button>
                        </Link>
                        <h5 className="pt-2">
                            <span className="text-title">
                                Subtotal:
                            </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Impuestos:
                            </span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Total:
                            </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
