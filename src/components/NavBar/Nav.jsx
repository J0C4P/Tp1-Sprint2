import MyList from './MyList'
import SearchBar from './SearchBar'

const Navbar = ({ busqueda, setBusqueda, cantidad, togglePanel }) => {
  return (
    <nav>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda}></SearchBar>
      <MyList cantidad={cantidad} togglePanel={togglePanel}></MyList>
    </nav>
  )
}

export default Navbar