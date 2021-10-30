import { Link } from "react-router-dom";

function Item(props){

return (
    <div key={props.id} className=' card w-50 mt-3'style={{backgroundColor : "#d7ccc8"}}>
    <center>
        <h2 className='card-header strong' style={{backgroundColor : "#e0e0e0"}}> {props.marca} {props.modelo}</h2>
        <div>
        <img className='card-body' alt='autos' src={props.img} height='100%' width='100%'/>
        </div>
        
        
        <p className='card-footer'>Precio : {props.precio}</p> 
        <Link exact to={`/detalle/${props.id}`}>
        <button className='btn btn-dark'>mas info</button>
        </Link>
        </center>
    </div>
)
}
export default Item;