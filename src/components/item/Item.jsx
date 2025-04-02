

import { Link } from 'react-router';
import './Item.css';



function Item( {producto, filtrarProducto} ) {

    const {nombre, precio, stock, img,id} = producto //destructuring 

    function agragrarCarrito(prod){
        const nuevoProducto={
          ...prod,
          cantidad:1,
        
    };
    console.log("agregando al acarrito",nuevoProducto)
    {/*, descripcion,categoria*/}
}

  return (
    <div className='card gap-1 '>
<h3 className='card-header' > {nombre} </h3>
<p className='card-body'> ${precio} </p>
<p className='card-body'> Quedan   {stock} unidades </p>
{
/*<p className='card-body'>    {categoria}  </p>
  <p className='card-body'> {descripcion}  </p>
*/}

<p className='card-body'> {img} </p>
<button className='btn btn-primary ' onClick={()=>agragrarCarrito(producto)}>Agregar al carrito</button>
 
 <Link to= {`/detalle/${id}`} >
    <button className='btn btn-primary   '>Ver detalle </button>
</Link>
</div>
  )
};

export default Item;

