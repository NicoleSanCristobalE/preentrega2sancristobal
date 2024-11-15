import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/navegacion/NavBar'
import ItemListContainer from './components/products/ItemListContainer'
import ItemDetailContainer from './components/products/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path='/category/:categoria' element={<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App