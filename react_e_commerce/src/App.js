import React, {Fragment, Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Componentes/NavBar/navbar.jsx';
import ProductList from './Componentes/Product-list/product-list.jsx';
import Detalle from './Componentes/Detalle/detalle.jsx';
import Cart from './Componentes/Cart/cart.jsx';
import Default from './Componentes/Default';

class App extends Component {
  render(){
    return (
      <Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/detalle" component={Detalle}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
      </Fragment>
  );
  };
}

export default App;
