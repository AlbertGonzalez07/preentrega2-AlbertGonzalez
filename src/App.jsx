
import NavBar from './components/navBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {


 return (
    <div className="container-app">
      <BrowserRouter>
         <NavBar />

         <Routes>
           <Route path="/" element={<ItemListContainer greeting={"Inicio ecommerce Albert Gonzalez"} />} />
           <Route path="/category/:idCategory" element={<ItemListContainer greeting={"Inicio ecommerce Albert Gonzalez"}/>} />
           <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
           
         </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
