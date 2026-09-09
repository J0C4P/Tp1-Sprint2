import { useState, useEffect } from "react"
import { useMyList } from "./hooks/useMyList"
import { useToggle } from "./hooks/useToggle"
import CatalogList from "./components/Catalog/CatalogList"
import ListPanel from "./components/ListPanel"
import Footer from "./components/Footer"
import Navbar from "./components/NavBar/Nav"

function App() {
  const { miLista, estaEnLista, toggleItem, quitar, cantidad, vaciar } = useMyList()
  const [busqueda, setBusqueda] = useState("")
  const [panelAbierto, togglePanel] = useToggle(false)

  useEffect(() => {
    document.title = cantidad > 0 ? `Mi GameList (${cantidad})` : "Mi GameList"
  }, [cantidad])

  return (
  <>
    <Navbar busqueda={busqueda} setBusqueda={setBusqueda} cantidad={cantidad} togglePanel={togglePanel}></Navbar>
    <main>
      <CatalogList
        estaEnLista={estaEnLista}
        onToggle={toggleItem}
        busqueda={busqueda}
      ></CatalogList>
      {panelAbierto && (
        <ListPanel miLista={miLista} quitar={quitar} vaciar={vaciar} cerrar={togglePanel}></ListPanel>
      )}
    </main>
    <Footer></Footer>
  </>
  )
}

export default App
