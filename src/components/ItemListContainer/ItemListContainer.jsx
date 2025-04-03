//import { useState } from 'react';
import { useState } from 'react';
import Item from '../item/Item';
//import { productos } from '../productos/productos';
import './ItemListContainer.css';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import { fetchData } from '../productos/fetchData';
//import ItemDitail from '../ItemDitail/ItemDitail'; 
import { useParams } from 'react-router';
//import { useEffect } from 'react';


function ItemListContainer() {

const [loader, setLoader]= useState(true);
const[todosLosProductos, setTodosLosProductos]=useState(null);

const {categoria} = useParams();

useEffect(()=>{
    //fetch posiblemente lo tengas q borrar o pausar para el tp
   
   // fetch("https://jsonplaceholder.typicode.com/posts")
    //.then(response => response.json())
    //.then(data => console.log(data))
    //.catch(err => console.error(err));  //siempre el ecatch error con fetch

    if(todosLosProductos){
      console.log("ya atenes prductods")
    }else{
      console.log("trayendo productos")
      
      fetchData(false)
      .then(response => {
        setTodosLosProductos(response)
        console.log(categoria)
        setLoader(false);
        },500)
      .catch(err => console.error(err))
      
    }

   
  
 //   setTimeout(() => {
 //   setLoader(false)
 // }, 2500);
}, [categoria] )

//   useEffect(()=>{
 //   console.log("Lista de productos",productos) //lo que quiero que haga
//    },[])//cuando quiero q se ejecute

  return (

      loader ?
        <Loader/>
        :
    <div>
    <div className='contenedorProductos'>    
    
    
          {
            
            todosLosProductos.map(el => {
          return(
        <Item key={el.id} producto= {el}  />
          )
        })}
      
    
    </div>
    {/*
        productoFiltrado && <ItemDitail producto={productoFiltrado} volverAlInicio = {()=>setProductoFiltrado(null) } />
          
      */}
    </div>
  
  );
};

export default ItemListContainer;
