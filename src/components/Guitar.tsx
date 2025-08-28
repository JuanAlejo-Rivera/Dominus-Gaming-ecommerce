import type { CartActions } from '../reducers/cart-reducer';
import type { dbproducts } from '../types';
import type { Dispatch } from 'react';

type GuitarProps = {
    guitar: dbproducts['cpu'][0] // Accede al tipo del primer elemento del array cpu
    dispatch: Dispatch<CartActions>
    quantity: number
    max_item: number
}



export default function Guitar({ guitar, dispatch, quantity, max_item }: GuitarProps) {

    const { name, price, image, description } = guitar;

    return (
        <div className="border p-3 m-5 rounded-2xl shadow-lg ">

            <div className="col-8">
                <h3 className="font-bold">{name}</h3>
                <div className="flex flex-col md:flex-row">
                    <img className="img-fluid" src={`/img/${image}.png`} alt={`imagen ${name}`} />
                </div>
                <p>{description}</p>
                <p className="font-bold">${price}</p>
                <button
                    onClick={() => dispatch({ type: 'add-to-cart', payload: { item: guitar } })}
                    type="button"
                    className="bg-blue-500 hover:bg-blue-600 mt-5 w-full p-3 font-semibold text-black text-lg rounded-lg shadow-md transition-colors"
                    disabled={quantity >= max_item}

                >Agregar al Carrito</button>
            </div>
        </div>
    )
}

