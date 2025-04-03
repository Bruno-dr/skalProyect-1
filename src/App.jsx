import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDitail from './components/ItemDitail/ItemDitail';



function App() {
  

  return (
   
   <BrowserRouter> 
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer />}/>        
        <Route path='/categoria/:categoria' element={ <ItemListContainer />}/>        
        <Route path='/detalle/:id' element={ <ItemDitail/>}/>        
        ItemDitail
      </Routes>
     
   </BrowserRouter>
  
   
  )
};

export default App;
