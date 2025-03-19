import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';



function App() {
  

  return (
   <>
    <NavBar/>
    <ItemListContainer greetings="probado Props"/>
 
   </>
  )
};

export default App;
