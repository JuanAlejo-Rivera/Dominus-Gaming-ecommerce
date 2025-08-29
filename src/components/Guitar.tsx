import { useOutletContext } from "react-router-dom";
import type { CartActions } from '../reducers/cart-reducer';
import type { dbproducts } from '../types';
import type { Dispatch } from 'react';

type OutletContext = {
  dispatch: Dispatch<CartActions>;
  cart: dbproducts['cpu'][0][];
};

type GuitarProps = {
  guitar: dbproducts['cpu'][0];
  quantity: number;
  max_item: number;
};

export default function Guitar({ guitar, quantity, max_item }: GuitarProps) {
  const { dispatch } = useOutletContext<OutletContext>();

  const { name, price, image, description } = guitar;

  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white border border-blue-600 p-5 m-5 rounded-2xl shadow-lg shadow-blue-900/40 min-h-[500px] flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-blue-500/50">
      {/* Contenido principal */}
      <div>
        <h3 className="font-bold text-xl text-blue-300 mb-2">{name}</h3>
        <div className="flex flex-col md:flex-row justify-center">
          <img
            className="mx-auto max-h-48 object-contain drop-shadow-lg"
            src={`/img/${image}.png`}
            alt={`imagen ${name}`}
          />
        </div>
        <p className="mt-4 text-sm text-blue-100">{description}</p>
        <p className="font-bold text-3xl text-white mt-6">${price}</p>
      </div>

      {/* Botón al final */}
      <button
        onClick={() =>
          dispatch({ type: "add-to-cart", payload: { item: guitar } })
        }
        type="button"
        className="bg-blue-500 hover:bg-blue-600 mt-5 w-full p-3 font-semibold text-white text-lg rounded-lg shadow-md shadow-blue-900/50 transition-all hover:shadow-blue-400/70"
        disabled={quantity >= max_item}
      >
        Agregar al Carrito
      </button>
    </div>
  );
}
