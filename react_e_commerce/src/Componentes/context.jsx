import React, { Component } from 'react'
import {detailProduct, storeProducts} from '../data';

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
    state = {
        productos: [],
        detailProduct: detailProduct,
        cart: storeProducts,
        modalOpen: false,
        modalProducto: detailProduct,
        cartSubTotal: 0,
        cartTax:0,
        cartTotal:0
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
    };

    handleDetail = id => {
        const producto = this.getItem(id);
        this.setState(() => {
            return{detailProduct: producto};
        });
    };

    addToCart = id => {
        let tempProducto = [...this.state.productos];
        const index = tempProducto.indexOf(this.getItem(id));
        const producto = tempProducto[index];
        producto.inCart = true;
        producto.count = 1;
        const price = producto.price;
        producto.total = price;

        this.setState(() => {
            return{
                productos: tempProducto,
                cart: [...this.state.cart, producto]
            };
        }/*, () => {
            console.log(this.state);
        }*/);
    };

    openModal = id => {
        const producto = this.getItem(id);
        this.setState(() => {
            return {modalProducto: producto, 
                    modalOpen:true
            };
        });
    };

    closeModal = () => {
        this.setState({
            modalOpen: false
        });
    };

    incremento = (id) => {
        console.log("incremento");
    };

    decremento = (id) => {
        console.log("decremento");
    };

    removeItem = (id) => {
        console.log("eliminado");
    }

    clearCart = () => {
        console.log("limpiado");
    }

    render() {
        return (
            <ProductContext.Provider value={{
               ...this.state,
               handleDetail: this.handleDetail,
               addToCart: this.addToCart,
               openModal: this.openModal,
               closeModal: this.closeModal,
               increment: this.incremento,
               decrement: this.decremento,
               removeItem: this.removeItem,
               clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
