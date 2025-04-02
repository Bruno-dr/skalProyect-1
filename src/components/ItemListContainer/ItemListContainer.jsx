//import { useState } from 'react';
import { useState } from 'react';
import Item from '../item/Item';
//import { productos } from '../productos/productos';
import './ItemListContainer.css';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import { fetchData } from '../productos/fetchData';
import ItemDitail from '../ItemDitalil/ItemDitale';
//import { useEffect } from 'react';


function ItemListContainer() {

const [loader, setLoader]= useState(true);
const[todosLosProductos, setTodosLosProductos]=useState(null);

const [productoFiltrado, setProductoFiltrado] =useState(null)

useEffect(()=>{
    //fetch posiblemente lo tengas q borrar o pausar para el tp
   
   // fetch("https://jsonplaceholder.typicode.com/posts")
    //.then(response => response.json())
    //.then(data => console.log(data))
    //.catch(err => console.error(err));  //siempre el ecatch error con fetch

    fetchData(false)
    .then(response => {
      setTodosLosProductos(response)
      setLoader(false);
      })
    .catch(err => console.error(err))
  
 //   setTimeout(() => {
 //   setLoader(false)
 // }, 2500);
}, [] )

//   useEffect(()=>{
 //   console.log("Lista de productos",productos) //lo que quiero que haga
//    },[])//cuando quiero q se ejecute

  return (

      loader ?
        <Loader/>
        :
    <div>
    <div className='contenedorProductos'>    
    
    
          {todosLosProductos.map(el => {
          return(
        <Item key={el.id} producto= {el} filtrarProducto={setProductoFiltrado} />
          )
        })}
      
    
    </div>
    {
        productoFiltrado && <ItemDitail producto={productoFiltrado} volverAlInicio = {()=>setProductoFiltrado(null) } />
          
      }
    </div>
  
  );
};

export default ItemListContainer;
