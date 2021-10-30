
import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail/ItemDetail';
import getFetch from './fil';
import { useParams } from "react-router-dom";
import { getFirestore } from '../services/getFirebase';



const ItemDetailContainer = (props) => {

const [guardado,setEstado] = useState()
const [loading,setLoading]= useState(true)
const {id} = useParams();



useEffect(()=> { 
  const dbQuery = getFirestore()
      dbQuery.collection('autos').doc(id).get()
      .then(respuesta => setEstado({id:respuesta.id,...respuesta.data()} ) )
      .catch(err=>alert('Error al cargar'))
 .finally(()=> setLoading(false))

}, [id])


return(
  <div style={{backgroundColor : "#616161"}}>
    <h1>{props.propiedadIDC}</h1>
    {loading ? <h1>CARGANDO...</h1>: <ItemDetail key={guardado.id} destacado={guardado} />}
  </div>
   )
}
export default ItemDetailContainer;