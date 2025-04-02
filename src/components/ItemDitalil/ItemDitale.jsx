import { Link } from 'react-router';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDitail.css';
import { useState } from 'react';



function ItemDitail( ) {

    const [contador, setContador] =useState(1);

    //const {nombre, precio, stock, descripcion, img} = producto //destructuring 
    function agragrarCarrito(prod){
        const nuevoProducto={
          ...prod,
          cantidad:contador,
        
    };
    console.log("agregando al acarrito",nuevoProducto)
   setContador(1)
}


  return (
   
       <div className='card gap-1 '>
        <p style={ {marginTop:"100px"} }>DEtalle del producto</p>
 {/*
<h3 className='card-header' > {nombre} </h3>
<p className='card-body'> ${precio} </p>
<p className='card-body'> Quedan   {stock} unidades </p>
<p className='card-body'> {descripcion}  </p>
<p className='card-body'> {img} </p>

<ItemCount stock={stock} contador= {contador} setContador= {setContador} />

<button className='btn btn-primary ' onClick={()=>agragrarCarrito ( producto )}>Agregar al carrito</button>

<Link to="/" >
<button className='btn btn-primary   ' >Volver </button>
</Link>
*/}
</div>
      
   
  )
};

export default ItemDitail;