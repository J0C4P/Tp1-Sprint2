const MyList = ({ cantidad, onMylist, setOnMylist, vaciar }) => {
  return (
    <div>
      <button type="button" onClick={() => setOnMylist(prev =>!prev)}>
        {onMylist ? "Ver Catalogo" : "Ver Mi Lista (" + cantidad + ")"}
      </button>
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
    </div>
  )
}

export default MyList