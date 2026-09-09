import { useEffect } from "react"

const ListPanel = ({ miLista, quitar, vaciar, cerrar }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        cerrar()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <aside>
      <div>
        <h2>-Mi Lista-</h2>
        <button type="button" aria-label="Cerrar" onClick={cerrar}>
          ✕
        </button>
      </div>
      {miLista.length === 0 ? (
        <p>Todavía no agregaste nada a tu lista!</p>
      ) : (
        <>
          <ul>
            {miLista.map((item) => (
              <li key={item.id}>
                {item.name}
                <button type="button" onClick={() => quitar(item.id)}>
                  Quitar
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => {
              if (window.confirm("¿Seguro que querés vaciar tu lista?")) {
                vaciar()
              }
            }}
          >
            Vaciar lista
          </button>
        </>
      )}
    </aside>
  )
}

export default ListPanel
