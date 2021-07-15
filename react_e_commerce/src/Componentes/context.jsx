import React, { Component } from 'react'
import {detailProduct, storeProducts} from '../data';

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
    state = {
        productos: [],
        detailProduct: detailProduct
    };

    componentDidMount(){
        this.setProductos();
    }

    setProductos = () => {
        let tempProductos = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProductos = [...tempProductos, singleItem];
        });
        this.setState(()=>{
            return {productos: tempProductos}
        });
    }

    handleDetail = () => {
        console.log("Hello from detail");
    }

    addToCart = (id) => {
        console.log("El id es: ", id);
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
