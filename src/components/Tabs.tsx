import { Link } from "react-router-dom";

export default function Tabs() {
  return (
    <div className="flex flex-col md:flex-row text-center gap-4 justify-center md:mr-20">
      <Link to="/" className="font-bold p-2 text-white">
        Procesadores
      </Link>
      <Link to="/rams" className="font-bold p-2 text-white">
        Memorias RAM
      </Link>
      <Link to="/gpu" className="font-bold p-2 text-white">
        GPU
      </Link>
      <Link to="/psu" className="font-bold p-2 text-white">
        PSU
      </Link>
      <Link to="/storage" className="font-bold p-2 text-white">
        HDD/SSD
      </Link>
    </div>
  );
}