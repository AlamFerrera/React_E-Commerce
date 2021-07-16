import React, {Component} from 'react';
import Title from '../title';
import CartColumns from './cartColumns';
import EmptyCart from './emptyCart';
import {ProductConsumer} from '../context';
import CartList from './cartList';
import CartTotals from './cartTotals';

class Cart extends Component{
    render(){
        return(
            <section>
                <ProductConsumer>
                    {
                        (value) => {
                            const {cart} = value;

                            if(cart.length > 0){
                                return(
                                    <>
                                        <Title name="Tu" title="Carrito"  />
                                        <CartColumns></CartColumns>
                                        <CartList value={value} />
                                        <CartTotals value={value} history={this.props.history} />
                                    </>
                                )
                            }
                            else{
                                return <EmptyCart/>
                            }
                        }
                    }
                </ProductConsumer>
            </section>
        );
    };
}

export default Cart;