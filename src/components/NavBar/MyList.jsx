const MyList = ({ cantidad, togglePanel }) => {
  return (
    <button type="button" onClick={togglePanel}>
      Mi Lista{cantidad > 0 ? ` (${cantidad})` : ""}
    </button>
  )
}

export default MyList
