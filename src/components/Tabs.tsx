import { Link } from "react-router-dom";


export default function Tabs() {
    return (
        <div className="flex text-center gap-4 justify-center mr-20">
            {/* <Link to='/' className='font-bold p-2 text-white'>Inicio</Link> */}
            <Link to='/processor' className='font-bold p-2 text-white'>Procesadores</Link>
            <Link to='/rams' className='font-bold p-2 text-white'>Memorias Ram</Link>
            <Link to='/gpu' className='font-bold p-2 text-white'>Gpu</Link>
            <Link to='/psu' className='font-bold p-2 text-white'>Psu</Link>
            <Link to='/storage' className='font-bold p-2 text-white'>Storage</Link>
        </div>

    )
}



