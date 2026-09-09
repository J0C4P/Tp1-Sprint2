import { useState, useEffect } from "react"
import CatalogList from "./components/Catalog/CatalogList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/NavBar/Nav"

function App() {
  const [miLista, setMiLista] = useState(() => {
    try {
      const guardado = localStorage.getItem("watchlist:miLista")
      return guardado ? JSON.parse(guardado) : []
    } catch (error) {
      console.warn("Datos corruptos en localStorage, se reinicia la lista.", error)
      return []
    }
  })
  const [busqueda, setBusqueda] = useState("")

  const estaEnLista = (id) => miLista.some((i) => i.id === id)

  const cantidad = miLista.length

  useEffect(() => {
    localStorage.setItem("watchlist:miLista", JSON.stringify(miLista))
  }, [miLista])

  useEffect(() => {
    document.title = `Mi Watchlist (${cantidad})`
  }, [cantidad])

  const toggleItem = (item) => {
    setMiLista((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    )
  }

  return (
  <>
    <Header></Header>
    <Navbar busqueda={busqueda} setBusqueda={setBusqueda} cantidad={cantidad}></Navbar>
    <CatalogList
      estaEnLista={estaEnLista}
      onToggle={toggleItem}
      busqueda={busqueda}
    ></CatalogList>
    <Footer></Footer>
  </>
  )
}

export default App
