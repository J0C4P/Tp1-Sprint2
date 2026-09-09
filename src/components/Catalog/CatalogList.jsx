import {items} from "../../data/items"
import CatalogCard from "./CatalogCard"

const CatalogList = ({ estaEnLista, onToggle, busqueda }) => {
  const itemsFiltrados = items.filter((item) =>
    item.name.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <section>
      <h2>Catalogo de Juegos</h2>
      {items.length === 0 ? (
        <p>Todavía no hay items en el catálogo.</p>
      ) : itemsFiltrados.length === 0 ? (
        <p>No encontramos resultados para "{busqueda}".</p>
      ) : (
        <div>
          {itemsFiltrados.map((item) => (
            <CatalogCard
              key={item.id}
              item={item}
              enLista={estaEnLista(item.id)}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default CatalogList