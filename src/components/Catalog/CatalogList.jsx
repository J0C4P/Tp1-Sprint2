import {items} from "../../data/items"
import CatalogCard from "./CatalogCard"

const CatalogList = ({ estaEnLista, onToggle, busqueda, onMylist }) => {
  const itemsFiltrados = items
    .filter((item) => item.name.toLowerCase().includes(busqueda.toLowerCase()))
    .filter((item) => !onMylist || estaEnLista(item.id))

  const hayAlgoEnMiLista = items.some((item) => estaEnLista(item.id))

  return (
    <section>
      <h2>{onMylist ? "Mi Lista" : "Catalogo de Juegos"}</h2>
      {items.length === 0 ? (
        <p>Todavía no hay items en el catálogo.</p>
      ) : itemsFiltrados.length === 0 ? (
        onMylist ? (
          hayAlgoEnMiLista ? (
            <p>No encontramos resultados para "{busqueda}" en tu lista.</p>
          ) : (
            <p>Todavía no agregaste nada a tu lista.</p>
          )
        ) : (
          <p>No encontramos resultados para "{busqueda}".</p>
        )
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