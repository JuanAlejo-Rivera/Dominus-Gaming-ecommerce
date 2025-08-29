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
    <div className="border p-3 m-5 rounded-2xl shadow-lg ">
      <div className="col-8">
        <h3 className="font-bold">{name}</h3>
        <div className="flex flex-col md:flex-row">
          <img
            className="img-fluid"
            src={`/img/${image}.png`}
            alt={`imagen ${name}`}
          />
        </div>
        <p>{description}</p>
        <p className="font-bold text-3xl text-blue-600 mt-4">${price}</p>

        <button
          onClick={() =>
            dispatch({ type: "add-to-cart", payload: { item: guitar } })
          }
          type="button"
          className="bg-blue-500 hover:bg-blue-600 mt-5 w-full p-3 font-semibold text-black text-lg rounded-lg shadow-md transition-colors"
          disabled={quantity >= max_item}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
