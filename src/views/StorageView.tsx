import { useEffect, useReducer } from "react"
import { cartReducer, initialState, max_item } from "../reducers/cart-reducer"
import Guitar from "../components/Guitar"

export default function processor() {


  const [state] = useReducer(cartReducer, initialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])


console.log(state.data)

  return (
    <>

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección de storage</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">
          {state.data.storage.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              quantity={state.cart.find(item => item.id === guitar.id)?.quantity || 0}
              max_item={max_item}
            />
          ))}



        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>

  </>
  )
}
