import ItemList from '../ItemList';
import autos from '../autos';
import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import { getFirestore } from '../../services/getFirebase';





function ItemListContainer(props){
  const [guardados,setAutos] = useState()
  const {idCategoria} = useParams()
 
  const busqueda = new Promise((res)=>{
    
    
   setTimeout(()=>{
              res(autos)}
              ,2000); 
    })
    useEffect(() =>{
      if(idCategoria){
      const dbQuery = getFirestore()
      dbQuery.collection('autos').where('categoria', '==', idCategoria).get()
      .then(respuesta =>{
        
        setAutos(respuesta.docs.map(auto =>({id:auto.id,...auto.data()} )) )
      } )
      .catch(err=>alert('Error al cargar'))
    } else{
      const dbQuery = getFirestore()
      dbQuery.collection('autos').get()
      .then(respuesta =>{
        
        setAutos(respuesta.docs.map(auto =>({id:auto.id,...auto.data()} )) )
      } )
      .catch(err=>alert('Error al cargar'))
    }
    },[idCategoria]);

  
    return(
        <div style={{backgroundColor : "#616161"}}>
        <div>
            <h1>{props.propiedadILC}</h1>
            
        </div>
           <ItemList className='container' vehiculos={guardados}/>
        </div>


    )
}
export default ItemListContainer;