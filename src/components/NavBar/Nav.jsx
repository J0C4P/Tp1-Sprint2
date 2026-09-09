import MyList from './MyList'
import SearchBar from './SearchBar'

const Navbar = ({ busqueda, setBusqueda, onMylist, setOnMylist, cantidad, vaciar }) => {
  return (
    <nav>
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda}></SearchBar>
      <MyList cantidad={cantidad} onMylist={onMylist} setOnMylist={setOnMylist} vaciar={vaciar}></MyList>
    </nav>
  )
}

export default Navbar