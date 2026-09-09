const CatalogCard = ({ item, enLista, onToggle }) => {
  return (
    <article>
      <h3>{item.name}</h3>
      <p>{item.console}</p>
      <p>{item.year}</p>
      <p>Rating: {item.rating}</p>
      <img src={item.image} alt={item.name} />
      <button type="button" onClick={() => onToggle(item)}>
        {enLista ? "Quitar de mi lista" : "Agregar a mi lista"}
      </button>
    </article>
  )
}

export default CatalogCard