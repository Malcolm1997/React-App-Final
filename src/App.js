import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Main from './Components/Main/Main';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import React, {useEffect, useState} from 'react';



function App() {


  const [prod, setProd] = useState(null)


  const tarea = new Promise((resolve, reject) => {
      
          
          resolve([
            {id: '1', name: 'Coca', precio: 200, description:'Es una gaseosa', category: 'gaseosa', stock:5},
            {id: '2', name: 'Sprite', precio: 150, description:'Es una gaseosa', category: 'gaseosa', stock:9},
            {id: '3', name: 'Vodka', precio: 600, description:'Es una bebida alcholica', category: 'alcohol', stock:5},
            {id: '4', name: 'Fernet', precio: 800, description:'Es una bebida alcholica', category: 'alcohol', stock:9},
            {id: '5', name: 'Speed', precio: 100, description:'Es un energizante', category: 'energizante', stock:15}
          ])

      
  })

  useEffect(() => {
      tarea.then(res => setProd(res))
  },)




  return (
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
        cart
      </Route>

      <Route exact path="*">
        <h1>Error de carga</h1>
      </Route> 

    </Switch>
    </BrowserRouter>
  );
}

export default App;
