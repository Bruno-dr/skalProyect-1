import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDitail from './components/ItemDitalil/ItemDitale';



function App() {
  

  return (
   
   <BrowserRouter> 
   <NavBar/>
      <Routes>
          <Route path='/'element= {   <ItemListContainer />} />
          <Route path='/detalle/:id' element= {  <ItemDitail/> } />
      </Routes>
     
   </BrowserRouter>
  
   
  )
};

export default App;
