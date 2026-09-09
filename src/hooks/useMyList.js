import { useLocalStorage } from "./useLocalStorage"

export function useMyList() {
  const [miLista, setMiLista] = useLocalStorage("watchlist:miLista", [])

  const estaEnLista = (id) => miLista.some((i) => i.id === id)

  const toggleItem = (item) => {
    setMiLista((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item]
    )
  }

  const cantidad = miLista.length

  const vaciar = () => setMiLista([])

  return { estaEnLista, toggleItem, cantidad, vaciar }
}
