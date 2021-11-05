import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Main from './Components/Main/Main';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import React, {useEffect, useState} from 'react';
import CartContextProvider from './Components/CartContext/CartContext'
import Cart from './Components/Cart/Cart'
import {getFirestore} from './services/getFirebase'



function App() {

  const [prod, setProd] = useState(null)

  useEffect(() => {

       const db = getFirestore()
       db.collection('productos').get()
       .then(res => setProd(res.docs.map(el => ( { id: el.id , ...el.data() } ) ) ) )
  },[])


console.log(prod)

  return (

    

    <CartContextProvider>
      <BrowserRouter>
      <NavBar/>
    <Switch>
      <Route exact path="/">
        <Main/>
      </Route>   

      <Route exact path="/category/:category">
        <Main/>
      </Route>
       
      <Route exact path="/productos/:name">
        <ItemDetailContainer  item={prod}/>
      </Route>

      <Route exact path="/cart">
        <Cart/>
      </Route>

      <Route exact path="*">
        <h1>Error de carga</h1>
      </Route> 

    </Switch>
    </BrowserRouter>
    </CartContextProvider>

    
  );
}

export default App;
