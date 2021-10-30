import ItemCount from "../../components/NabVar/ItemCount";
import {Link} from 'react-router-dom';
import {useContext, useState} from 'react';
import { cartContext } from "../../Context/cartContext";




function ItemDetail({destacado}){

     const [seAgregaAlCarrito,setSeAgregaAlCarrito] = useState(false);
     const [cantidadItems,setCantidadItems] = useState(0);

     
     function onAdd(count){
          

           setCantidadItems(count);
           setSeAgregaAlCarrito(true);
           addToCart(destacado, count)
      }
      
      const {addToCart} = useContext(cartContext)
      

      
      
    return(
         <center>

         <div className='card w-50 mt-3' style={{backgroundColor : "#d7ccc8"}}>
        <h2 className='card-header strong' style={{backgroundColor : "#e0e0e0"}}> {destacado.marca} {destacado.modelo}</h2>
        <div>
        <img className='card-body' alt='autos' height='100%' width='100%' src={destacado.foto}/>
        </div>
        <div className='card-footer'>
        <p>{destacado.estado}</p>
        </div>
        <div><center>{
        !seAgregaAlCarrito?
          <ItemCount stock={5} inicial={1} onAdd={onAdd} primero={'button'}/>:
          <Link exact to='/cart'><button className='btn btn-dark'>Terminar Compra</button></Link>}
          </center>
        </div>
        </div>  
        </center>
         )
    }
    export default ItemDetail;
