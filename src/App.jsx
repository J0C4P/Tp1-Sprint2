import { useState, useEffect } from "react"
import { useLocalStorage } from "./hooks/useLocalStorage"
import { useMyList } from "./hooks/useMyList"
import CatalogList from "./components/Catalog/CatalogList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/NavBar/Nav"

function App() {
  const { estaEnLista, toggleItem, cantidad, vaciar } = useMyList()
  const [busqueda, setBusqueda] = useState("")
  const [onMylist, setOnMylist] = useLocalStorage("watchlist:enMiLista", false)

  useEffect(() => {
    document.title = `Mi Watchlist (${cantidad})`
  }, [cantidad])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOnMylist(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
  <>
    <Header></Header>
    <Navbar busqueda={busqueda} setBusqueda={setBusqueda} onMylist={onMylist} setOnMylist={setOnMylist} cantidad={cantidad} vaciar={vaciar}></Navbar>
    <CatalogList
      estaEnLista={estaEnLista}
      onToggle={toggleItem}
      busqueda={busqueda}
      onMylist={onMylist}
    ></CatalogList>
    <Footer></Footer>
  </>
  )
}

export default App
