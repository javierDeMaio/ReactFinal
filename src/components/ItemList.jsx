import Item from './Item';


function ItemList({vehiculos}){
return(
       <div>
       {vehiculos? vehiculos.map(auto=> <Item key={auto.id} id={auto.id} marca={auto.marca} modelo={auto.modelo}  img={auto.foto} precio={auto.precio}/>) : <h1 className='title'>CARGANDO VEHICULOS SELECCIONADOS. . . </h1>}
       </div>
      )
}
export default ItemList;