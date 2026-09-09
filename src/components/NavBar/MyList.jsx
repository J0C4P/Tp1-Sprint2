const MyList = ({ cantidad, onMylist, setOnMylist }) => {
  return (
    <div>
      <button type="button" onClick={() => setOnMylist(prev =>!prev)}>
        {onMylist ? "Ver Catalogo" : "Ver Mi Lista (" + cantidad + ")"}
      </button>
    </div>
  )
}

export default MyList