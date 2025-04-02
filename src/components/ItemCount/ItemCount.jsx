//import { useState } from 'react';
import './ItemCount.css';



function ItemCount( {stock, contador, setContador} ) {

       // const [contador, setContador] =useState(1);

    function modificarContador(operacion){
        if(operacion === "+"){
            if (contador < stock ){
                setContador(contador + 1);
            };
        }else{
            if(contador > 1){
                setContador(contador - 1);
            };
        };
    };

   // function agregarAlCarrito(){
     //   console.log(`agreagar al carrito ${contador} `);
       // setContador(1);
    //};
    
    
        return(
                <div style={{display:'flex', flexDirection:'column', padding:`2rem`}}>
                    <h3>Nombre del producto :  </h3>
                    <div style={{display:'flex', width:`10rem`, padding:`2rem`, justifyContent:'space-around'}}>
                        <button className='btn btn se' onClick={()=>modificarContador("-")}>-</button>
                        <p> {contador} </p>
                        <button className='btn btn secondary' onClick={()=>modificarContador("+")}>+</button>
              {/*      // <button className='btn btn secondary' onClick={()=>agregarAlCarrito()}>agregar al carrito</button>   
                */}    </div>
                </div>

        )

 
  
};

export default ItemCount;