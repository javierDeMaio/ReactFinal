import {createContext, useState} from 'react';


export const cartContext = createContext([])

 export default function CartContextProvider({children}){
    const [cartList,setCartList]=useState([])
    
    function addToCart(destacado,count){
       
        function itsInCart(destacado){
      return cartList.find(x => x.id === destacado.id)
    }
        if(itsInCart(destacado) === undefined){
           
        setCartList([...cartList,{...destacado, cantidad :count}])}

        else{
           const repetido = cartList.find(x => x.id === destacado.id) 
           
           repetido.cantidad = repetido.cantidad + count
          const filtro = cartList.filter(x => x.id !== destacado.id)
          setCartList([...filtro, repetido])
        
        }
    }
     function deleteFromCart(destacado){
        const filtro = cartList.filter(x => x.id !== destacado.id)
        setCartList([...filtro])

     }
    
    function deleteItems(){
        setCartList([])
    }
     const iconCart = () => {
         return cartList.reduce((acum,valor)=> acum + valor.cantidad,0)
     }
     const precioAcumulado = () => {
         return cartList.reduce((acum, valor)=>(acum + (valor.cantidad * valor.precio)), 0)
     }
    

    return(
        <cartContext.Provider value={{
            cartList,
            addToCart,
            deleteItems,
            deleteFromCart,
            iconCart,
            precioAcumulado
        }}>
            {children}
        </cartContext.Provider>
    )
}
 



  