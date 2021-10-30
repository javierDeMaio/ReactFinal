import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NabVar from './components/NabVar/NabVar';
import CartWidget from './components/NabVar/CartWidget';
import ItemListContainer from './components/NabVar/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import CartContextProvider from '../src/Context/cartContext';


function App() {

  return (
   
   
   <CartContextProvider>
    <BrowserRouter>
    <>
    <NabVar>
      <CartWidget/>
    </NabVar>
    <div>
    <Switch>
          <Route exact path='/detalle/:id'>
            <ItemDetailContainer propiedadIDC={'destacado'}/>
          </Route>
          <Route exact path='/' >
          
            <ItemListContainer propiedadILC={'Vehiculos Seleccionados'}/>
            
          </Route>
          <Route exact path='/categoria/:idCategoria' component={ItemListContainer}/>
          <Route path='/cart'>
            <Cart/>
          </Route>
    </Switch>
    </div>
    </>
    </BrowserRouter>
    
    </CartContextProvider>
  )
  }
export default App;
