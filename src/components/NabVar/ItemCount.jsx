import React, {useState} from 'react';



function ItemCount ({onAdd,stock,inicial}){
const [count, setCount] = useState(inicial);

const HandleCount = () => {
    if(count < stock){
        setCount(count + 1)
     }   
   else {
      alert('no hay mas productos');
       }
    }

const HandleNoCount = () => {
    if (count > inicial){
    setCount(count - 1 )}
    else {
        
    alert('no puede ser nulo')
}};


return (
    <div style={{backgroundColor : "#b1bace"}}>                  
    <h3>selecciona cuantos productos</h3>
    <p>{count}</p>
    <button className='btn btn-danger' onClick={HandleNoCount}>Restar</button>
    <button className='btn btn-success' onClick={HandleCount}>Agregar</button>
    <hr/>
    <button className='btn btn-dark' onClick={()=> onAdd(count)}>Agregar al Carrito</button>
    <hr/> 
    </div>   

)}
; export default ItemCount;