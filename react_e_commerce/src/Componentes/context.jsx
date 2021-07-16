import React, { Component } from 'react'
import {detailProduct, storeProducts} from '../data';

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
    state = {
        productos: [],
        detailProduct: detailProduct,
        cart: [],
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
        }, () => {
           this.addTotals();
        });
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
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(()=>{
            return{
                cart: [...tempCart]
            }
        }, () => {
            this.addTotals();
        })
    };

    decremento = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        if(product.count > 1)
        {
            product.count = product.count - 1;
            product.total = product.count * product.price;
    
            this.setState(()=>{
                return{
                    cart: [...tempCart]
                }
            }, () => {
                this.addTotals();
            })
        }
        return ;
    };

    removeItem = (id) => {
        let tempProductos = [...this.state.productos];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item =>item.id !== id);

        const index = tempProductos.indexOf(this.getItem(id));
        let removedProduct = tempProductos[index];

        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return{
                cart:[...tempCart],
                productos: [...tempProductos]
            };
        }, () => {
            this.addTotals();
        });
    };

    clearCart = () => {
        this.setState(() => {
            return{
                cart: []
            }
        }, () => {
            this.setProductos();
            this.addTotals();
        });
    };

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.10;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState({
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
        });
    };

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
