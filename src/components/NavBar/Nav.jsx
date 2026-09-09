import MyList from './MyList'
import SearchBar from './SearchBar'

const Navbar = ({ busqueda, setBusqueda, cantidad }) => {
  return (
    <nav>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda}></SearchBar>
      <MyList cantidad={cantidad}></MyList>
    </nav>
  )
}

export default Navbar