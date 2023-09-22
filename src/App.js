import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Product from './Components/Products/Product';
import ProductList from './Components/Products/ProductList';

function App() {

useEffect(()=>{
  fetch('https://my-json-server.typicode.com/ss357/My-JSON-Server/products') 
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));


},[])

  return (
    <div className="App">
      <Navbar></Navbar>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
