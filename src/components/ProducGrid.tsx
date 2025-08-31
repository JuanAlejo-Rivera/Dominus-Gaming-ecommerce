import type { Product } from "../types"
import Cards from "./Cards"


type ProductGridProps = {
  items: Product[]
  max_item: number
  cart: any[]
  title: string
}


export const ProducGrid = ({ items, max_item, title, cart }: ProductGridProps) => {
  return (
    <>
      <main className="mt-5">
        <h2 className="text-center text-4xl mb-5 font-bold">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4">
          {items.map((card) => (
            <Cards
              key={card.id}
              card={card}
              quantity={cart.find(item => item.id === card.id)?.quantity || 0}
              max_item={max_item}
            />
          ))}
        </div>
      </main>


    </>
  )
}
