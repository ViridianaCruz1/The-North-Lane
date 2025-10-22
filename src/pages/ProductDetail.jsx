import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShoppingCart, CreditCard, ArrowLeft } from "lucide-react";
import getParfums from "../functions/getParfums";
import LoadingSpinner from "../ui/LoadingSpinner";
import SelectMililitros from "../ui/SelectMililitros";

export default function ProductDetail() {
  const { id } = useParams(); // ahora obtenemos ambos
  const navigate = useNavigate();
  const [parfum, setParfum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mililitros, setMililitros] = useState(1);

  useEffect(() => {
    async function fetchParfum() {
      try {
        const data = await getParfums();
        const found = data.find((item) => String(item.id) === String(id));
        if (!found) {
          setError("Perfume no encontrado");
        } else {
          setParfum(found);
        }
      } catch (err) {
        console.error(err);
        setError("Error al cargar el perfume");
      } finally {
        setLoading(false);
      }
    }
    fetchParfum();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <div className="text-center mt-20">
        <p className="text-red-500 font-semibold">{error}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          Volver
        </button>
      </div>
    );

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 bg-white p-6 rounded-2xl shadow-md max-w-6xl mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <button
              onClick={() => navigate(-1)}
              className="text-sm text-gray-600 mb-4 hover:text-gray-900 flex"
            >
              <ArrowLeft size={24} />
              {/* <span className="text-sm font-medium pl-3">
                Regresar al catálogo
              </span> */}
            </button>
            <img
              src={parfum.image}
              alt={parfum.nombre}
              className="max-h-60 sm:max-h-full mx-auto rounded-xl object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-semibold mb-2">{parfum.nombre}</h1>
              <p className="text-gray-500 text-sm mb-3 italic">
                {parfum.concentracion}
              </p>

              {/* PRECIO */}
              <div className="flex items-center gap-4 my-5">
                <span className="text-3xl font-bold text-gray-900">
                  ${parfum.precio} /ml
                </span>
                <span
                  className={`font-medium pl-6
                    ${parfum.disponible === "Agotado" ? "text-red-600" : ""}
                    ${
                      parfum.disponible === "Próximamente"
                        ? "text-yellow-600"
                        : ""
                    } ${
                    parfum.disponible === "Disponible" ? "text-green-600" : ""
                  }
                  `}
                >
                  {parfum.disponible}
                </span>
              </div>

              <div className="my-6">
                <h2 className="text-sm font-semibold text-gray-700 mt-2">
                  NOTAS:
                </h2>
                <ul className="text-sm text-gray-600 leading-6">
                  <li>{parfum.notas}</li>
                </ul>
                <h2 className="text-sm font-semibold text-gray-700 mt-2">
                  CATEGORÍA:
                </h2>
                <ul className="text-sm text-gray-600 leading-6">
                  <li>{parfum.categoria}</li>
                </ul>
                <a
                  href={parfum.fraganticaLink}
                  className="text-sm text-[#D4AF7A] hover:underline mt-4 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conocer más sobre "{parfum.nombre}"
                  {parfum.fraganticaLink && " en Fragantica"}
                </a>
              </div>

              <SelectMililitros onChange={(valor) => setMililitros(valor)} />

              <div className=" text-[#D4AF7A] hover:underline mt-4 inline-block font-semibold">
                Total: ${parfum.precio * mililitros} por {mililitros}ml
              </div>

              <div className="mt-6 flex gap-4">
                <button className="flex items-center gap-2 bg-[#A47E3B] text-white px-5 py-2 rounded-lg hover:bg-[#D4AF7A] text-sm ">
                  <ShoppingCart size={18} />
                  Añadir al carrito
                </button>

                <button className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 text-sm ">
                  <CreditCard size={18} />
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
