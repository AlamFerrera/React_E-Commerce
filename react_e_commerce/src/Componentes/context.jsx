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

    getItem = id => {
        const producto = this.state.productos.find(item => item.id === id);
        return producto;
    }

    handleDetail = id => {
        const producto = this.getItem(id);
        this.setState(() => {
            return{detailProduct: producto};
        })
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
