import {items} from "../../data/items"
import CatalogCard from "./CatalogCard"

const CatalogList = () => {
  return (
    <section>
      <h2>Catalogo de Juegos</h2>
      <div>
        {items.map((item) => (
          <CatalogCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default CatalogList