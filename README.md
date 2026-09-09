# README

## Qué es
Mi Watchlist: un catálogo de videojuegos donde podés buscar, agregar juegos a una lista personal y sacarlos, con un contador y un panel aparte para ver/gestionar esa lista. La lista persiste entre recargas (F5).

## Cómo correrlo
```bash
npm install
npm run dev
```

## Dónde vive el estado, y por qué
- `busqueda` (texto del buscador) y `panelAbierto` (si el panel de "Mi Lista" está abierto) son estado plano en `App.jsx` — no necesitan sobrevivir a un refresh.
- La lista en sí vive dentro de `hooks/useMyList.js`, que por debajo usa `hooks/useLocalStorage.js` para persistirla.
- `App.jsx` es el ancestro común del catálogo (`CatalogList`) y del panel (`ListPanel`), así que `useMyList()` se llama **una sola vez** ahí y se pasa hacia abajo por props. Si se llamara por separado en cada componente, cada uno tendría su propia copia en memoria, desincronizadas entre sí hasta el próximo refresh.
- El contador (`cantidad`) y si un juego ya está en la lista (`estaEnLista`) no son estado propio — se calculan directo a partir de la lista en cada render, no se guardan aparte.
- El campo `destacado` en `src/data/items.js` es booleano y no se puede deducir de ningún otro campo del juego (está puesto a mano, no calculado de `rating` ni de ningún otro dato).

## Qué se simplificó al extraer los custom hooks
Antes de `useLocalStorage`/`useMyList`, `App.jsx` tenía la lectura+escritura de `localStorage` (con su `try/catch`) repetida para cada cosa persistida, y toda la lógica de agregar/quitar/vaciar mezclada con el resto del componente. Después del refactor, `App.jsx` llama `useMyList()` en una sola línea, y ningún componente fuera de `useLocalStorage.js` toca `localStorage` directamente.

## Bonus: cerrar con Escape
El panel (`ListPanel.jsx`) escucha `Escape` con su propio `useEffect` (con cleanup en el `return`). Vive ahí y no en `App.jsx` porque el listener solo tiene sentido mientras el panel está montado — si viviera en `App`, escucharía todo el tiempo, incluso con el panel cerrado.

## Uso de IA
Usé Claude Code durante toda la implementación: para planificar el orden en que armar las features, revisar código propio, explicar por qué cada patrón de React funciona como funciona, y para el refactor a custom hooks. Las decisiones (qué approach tomar, cuándo separar algo en un hook) las tomé yo, guiado por esas explicaciones.

## Lo que me costó
Los custom hooks fueron lo que más me costó entender — por eso los dejé para el final, prefería ver el estado y los efectos funcionando directo en los componentes antes de abstraerlos a un hook.
