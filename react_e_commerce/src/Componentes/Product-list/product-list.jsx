import React, {Component, Fragment} from 'react'
import Producto from '../Producto/producto';
import Title from '../title';
import {ProductConsumer} from '../context';

class ProductList extends Component{
    
    render(){
        
        return(
            <Fragment>
               <div className="py-5">
                   <div className="container">
                     <Title name="Nuestros" title="Productos" />
                       <div className="row">
                           <ProductConsumer>
                               {(value) => {
                                 return value.productos.map((val,index) => {
                                    return   <Producto producto={val} 
                                                       key={val.id} />  
                                 });
                               }}
                           </ProductConsumer>
                       </div>
                   </div>
               </div>
            </Fragment>
        );
    }
}

export default ProductList;