import { useState } from 'react';
import { useContext } from 'react';
import {cartContext} from '../../Context/cartContext';
import { getFirestore } from '../../services/getFirebase';
import firebase from 'firebase';



const Cart =()=>{
    const {cartList,deleteItems,deleteFromCart,precioAcumulado} = useContext(cartContext)
    
    const db = getFirestore()
    const pushData = (e) => {
        e.preventDefault()
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(emailRegex.test(formData.email)=== true && emailRegex.test(formData.email2)=== true){
            if(formData.email === formData.email2){
        let order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = formData
        order.total = precioAcumulado();
        order.items = cartList.map(cartItem =>{
            const id = cartItem.id;
            const title = cartItem.modelo;
            const price = cartItem.precio* cartItem.cantidad;
            return {id,title,price}
            })
        
        db.collection('orders').add(order)
        .then(resp=>alert(resp.id))
        .catch(err=>alert('Error al cargar'))
        .finally(()=> setFormData({
            name:'',
            tel:'',
            email:'',
            email:''
        }))}
        else{alert('Los Emails no coinciden')}
    }else{
        alert(`Error en validación de email`)
    }
}

    


    const [formData,setFormData] = useState({
     name:'',
     tel:'',
     email:'',
     email2:''
 })
    

    function savedData(e){
        
            setFormData ({
                ...formData,
                [e.target.name]:e.target.value,
                [e.target.tel]:e.target.value,
                [e.target.email]:e.target.value,
                [e.target.email2]:e.target.value
            })
    }
        
    

 



return(
<div style={{backgroundColor : "#616161"}}>
    <center>
    <div>
        {cartList? (cartList.map((x) => <div className='card w-50 mt-3 card-header' style={{backgroundColor : "#e0e0e0"}}><h2>{x.marca}{x.modelo}</h2>
                                        <h3>precio : {x.precio}</h3>
                                      <div className='card-body'>
                                       <img  alt='autos' src={x.foto} height='100%' width='100%'/>
                                       <p>{x.precio*x.cantidad}</p>
                                      </div>
                                      <button className='btn btn-dark' onClick={() =>deleteFromCart(x)}>sacar de la lista</button>
                                      
                                    </div> )):<div> No hay nada</div>}
                                    <form 
                                    onSubmit={pushData}
                                    onChange={savedData}>
                                        <input 
                                            type='text'
                                            placeholder='Ingrese su nombre'
                                            name='name'
                                            value={formData.name}
                                        />
                                        <input 
                                            type='text'
                                            placeholder='Ingrese su numero de Telêfono'
                                            name='tel'
                                            value={formData.tel}
                                        />
                                        <input 
                                            type='text'
                                            placeholder='Ingrese su email'
                                            name='email'
                                            value={formData.email}
                                        />
                                        <input 
                                            type='text'
                                            placeholder='confirme su email'
                                            name='email2'
                                            value={formData.email2}
                                        />
                                        <button className='btn btn-dark'>ir a Pagar</button>

                                    </form>

                                    
                                    <button onClick={deleteItems} className='btn btn-dark'>Vaciar Carrito</button>
                                    
                                    <div>
                                        <label className='btn-dark'>precio Total = {precioAcumulado()}</label>
                                    </div>
                                    </div>        
                                    
    </center>
</div>

)

}
export default Cart;