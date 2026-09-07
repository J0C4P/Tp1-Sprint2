import CatalogList from "./components/Catalog/CatalogList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/NavBar/Nav"

function App() {
  return (
  <>  
    <Header></Header>
    <Navbar></Navbar>
    <CatalogList></CatalogList>
    <Footer></Footer>
  </>
  )
}

export default App
