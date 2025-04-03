import { Link, useParams } from 'react-router';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDitail.css';
import { useEffect, useState } from 'react';
import { fetchData } from '../productos/fetchData';
import Loader from '../Loader/Loader';



function ItemDitail( ) {

    const {id} = useParams();

    const [contador, setContador] =useState(1);
    const [producto, setproducto] =useState( null );
    const [loader, setLoader]= useState(true);

    //const {nombre, precio, stock, descripcion, img} = producto //destructuring 
    function agragrarCarrito(prod){
        const nuevoProducto={
          ...prod,
          cantidad:contador,
        
    };
    console.log("agregando al acarrito",nuevoProducto)
   setContador(1);
};

useEffect(() =>{ 
    fetchData()
      .then(response => {
        const mostrarProducto = response.find(el => el.id ===parseInt(id) )
        setproducto(mostrarProducto);
        setTimeout(() => {
          setLoader(false);
        },500);
        })
      .catch(err => console.error(err));
    
   

  
}, []);


  return (

    loader ? <Loader/> :
      <div className='card gap-1 '>
        { producto ? 

          <>
            <p style={ {marginTop:"100px"} }>{producto ? producto.nombre : "cargando"}</p>
 
            <h3 className='card-header' > {producto.nombre} </h3>
            <p className='card-body'> ${producto.precio} </p>
            <p className='card-body'> Quedan   {producto.stock} unidades </p>
            <p className='card-body'> {producto.descripcion}  </p>
            <p className='card-body'> {producto.img} </p>

            <ItemCount stock={producto.stock} contador= {contador} setContador= {setContador} />

            <button className='btn btn-primary ' onClick={()=>agragrarCarrito ( producto )}>Agregar al carrito</button>

            <Link to="/" >
            <button className='btn btn-primary   ' >Volver </button>
            </Link>
          </>
          :
          <p style={ {marginTop:"100px"} }> Producto no encontrado</p>
         }
        

</div>
      
   
  )
};

export default ItemDitail;