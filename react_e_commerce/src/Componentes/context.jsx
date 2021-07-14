import React, { Component } from 'react'
import {detailProduct, storeProducts} from '../data';

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
    state = {
        productos: storeProducts,
        detailProduct: detailProduct
    }

    handleDetail = () => {
        console.log("Hello from detail");
    }

    addToCart = () => {
        console.log("Hello from cart");
    }

    render() {
        return (
            <ProductContext.Provider value={{
               ...this.state,
               handleDetail: this.handleDetail,
               addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
