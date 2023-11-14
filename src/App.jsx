import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
//import { Maps } from "./components"
//
export const App = () => {
  return (
    <BrowserRouter>
    
      <NavBar />

      <Routes>

      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/category/:category" element={<ItemListContainer/>} />
      <Route path="/Item/:id" element={<ItemDetailContainer/> }/>


      </Routes>

    </BrowserRouter>
  )
}

