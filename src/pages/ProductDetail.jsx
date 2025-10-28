// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { ShoppingCart, CreditCard, ArrowLeft, CheckCircle } from "lucide-react";
// import getProducts from "../functions/getProducts";
// import LoadingSpinner from "../ui/LoadingSpinner";
// import SelectQuantity from "../ui/SelectQuantity";
// import { useCart } from "../context/CartContext";

// export default function ProductDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [showSuccess, setShowSuccess] = useState(false); // 👈 nuevo estado
//   const { addToCart } = useCart();

//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         const data = await getProducts();
//         const found = data.find((item) => String(item.id) === String(id));
//         if (!found) {
//           setError("Producto no encontrado");
//         } else {
//           setProduct(found);
//         }
//       } catch (err) {
//         console.error(err);
//         setError("Error al cargar el perfume");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchProduct();
//   }, [id]);

//   if (loading) return <LoadingSpinner />;
//   if (error)
//     return (
//       <div className="text-center mt-20">
//         <p className="text-red-500 font-semibold">{error}</p>
//         <button
//           onClick={() => navigate(-1)}
//           className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md"
//         >
//           Volver
//         </button>
//       </div>
//     );

//   const handleAddToCart = () => {
//     const productToAdd = {
//       id: product.id,
//       productName: product.productName,
//       quantity,
//       image: product.image,
//       price: product.price,
//     };
//     addToCart(productToAdd);

//     // ✅ Mostrar mensaje de éxito por 3 segundos
//     setShowSuccess(true);
//     setTimeout(() => {
//       setShowSuccess(false);
//     }, 3000);
//   };

//   return (
//     <>
//       <div className="flex flex-col lg:flex-row gap-10 bg-white p-6 rounded-2xl shadow-md max-w-6xl mx-auto my-10 relative">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <button
//               onClick={() => {
//                 navigate(-1);
//                 setQuantity(1);
//               }}
//               className="text-sm text-gray-600 mb-4 hover:text-gray-900 flex"
//             >
//               <ArrowLeft size={24} />
//             </button>
//             <img
//               src={product.image}
//               alt={product.productName}
//               className="max-h-60 sm:max-h-full mx-auto rounded-xl object-contain"
//             />
//           </div>

//           <div className="flex-1 flex flex-col justify-between">
//             <div>
//               <h1 className="text-2xl font-semibold mb-2">
//                 {product.productName}
//               </h1>
//               <p className="text-gray-500 text-sm  italic">{product.brand}</p>
//               <p className="text-gray-500 text-sm font-semibold mb-3 ">
//                 {product.store}
//               </p>

//               {/* price */}
//               <div className="flex items-center gap-4 my-5">
//                 <span className="text-3xl font-bold text-gray-800">
//                   ${product.price}
//                 </span>
//                 <span
//                   className={`font-medium pl-6
//                     ${product.available === false ? "text-red-600" : ""}
//                     ${product.available === true ? "text-green-600" : ""}
//                   `}
//                 >
//                   {product.available ? "Disponible" : "Agotado"}
//                 </span>
//               </div>

//               <div className="my-6">
//                 <h2 className="text-sm font-semibold text-gray-700 mt-2">
//                   DETALLES DEL PRODUCTO:
//                 </h2>
//                 <ul className="text-sm text-gray-600 leading-6 pr-6">
//                   <li>{product.description}</li>
//                 </ul>
//                 <h2 className="text-sm font-semibold text-gray-700 mt-2">
//                   CATEGORÍA:
//                 </h2>
//                 <ul className="text-sm text-gray-600 leading-6">
//                   <li>{product.categoria}</li>
//                 </ul>
//               </div>

//               <div
//                 className={`
//                   ${product.disponible === "Agotado" ? "hidden" : ""}
//                   `}
//               >
//                 <SelectQuantity onChange={(valor) => setQuantity(valor)} />

//                 <div className="text-[#4A6A8A] mt-4 font-semibold">
//                   Total: ${product.price * quantity} por {quantity}{" "}
//                   {product.productName}
//                 </div>

//                 <div className="mt-2 flex gap-4 items-center">
//                   <button
//                     onClick={handleAddToCart}
//                     className="flex items-center gap-2 bg-[#4A6A8A] text-white px-5 py-2 rounded-lg hover:bg-[#B0C4DE] text-sm transition-all duration-300"
//                   >
//                     <ShoppingCart size={18} />
//                     Añadir al carrito
//                   </button>

//                   {/* ✅ Mensaje temporal de éxito */}
//                   {showSuccess && (
//                     <span className="flex items-center gap-1 text-green-600 text-sm font-medium animate-fade-in">
//                       <CheckCircle size={16} />
//                       Agregado con éxito
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animación Tailwind personalizada */}
//       <style>
//         {`
//           @keyframes fade-in {
//             from { opacity: 0; transform: translateY(5px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           .animate-fade-in {
//             animation: fade-in 0.3s ease-in-out;
//           }
//         `}
//       </style>
//     </>
//   );
// }

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShoppingCart, CreditCard, ArrowLeft, CheckCircle } from "lucide-react";
import getProducts from "../functions/getProducts";
import LoadingSpinner from "../ui/LoadingSpinner";
import SelectQuantity from "../ui/SelectQuantity";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // 👈 imagen actual
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProducts();
        const found = data.find((item) => String(item.id) === String(id));
        if (!found) {
          setError("Producto no encontrado");
        } else {
          setProduct(found);
          // Establece la imagen principal (la primera disponible)
          const images = [
            found.image,
            found.image2,
            found.image3,
            found.image4,
            found.image5,
          ].filter(Boolean);
          setSelectedImage(images[0]);
        }
      } catch (err) {
        console.error(err);
        setError("Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  const imageList = [
    product?.image,
    product?.image2,
    product?.image3,
    product?.image4,
    product?.image5, // si existe
  ].filter(Boolean); // elimina los undefined

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

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      productName: product.productName,
      quantity,
      image: selectedImage,
      price: product.price,
    };
    addToCart(productToAdd);

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 bg-white p-6 rounded-2xl shadow-md max-w-6xl mx-auto my-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <button
              onClick={() => {
                navigate(-1);
                setQuantity(1);
              }}
              className="text-sm text-gray-600 mb-4 hover:text-gray-900 flex"
            >
              <ArrowLeft size={24} />
            </button>

            {/* 🖼️ Imagen principal */}
            <div className="relative">
              <img
                src={selectedImage}
                alt={product.productName}
                className="max-h-56 sm:max-h-full mx-auto rounded-xl object-contain"
              />
            </div>

            {/* 🖼️ Miniaturas */}
            <div className="flex justify-center gap-2 mt-4">
              {imageList.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.productName} ${index + 1}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-12 h-12 rounded-lg object-cover cursor-pointer border-2 transition-all ${
                    selectedImage === img
                      ? "border-[#4A6A8A]"
                      : "border-transparent hover:border-[#B0C4DE]"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-semibold mb-2">
                {product.productName}
              </h1>
              <p className="text-gray-500 text-sm italic">{product.brand}</p>
              <p className="text-gray-500 text-sm font-semibold mb-3">
                {product.store}
              </p>

              {/* price */}
              <div className="flex items-center gap-4 my-5">
                <span className="text-3xl font-bold text-gray-800">
                  ${product.price}
                </span>
                <span
                  className={`font-medium pl-6 ${
                    product.available === false
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {product.available ? "Disponible" : "Agotado"}
                </span>
              </div>

              <div className="my-6">
                <h2 className="text-sm font-semibold text-gray-700 mt-2">
                  DETALLES DEL PRODUCTO:
                </h2>
                <ul className="text-sm text-gray-600 leading-6 pr-6">
                  <li>{product.description}</li>
                </ul>
                <h2 className="text-sm font-semibold text-gray-700 mt-2">
                  CATEGORÍA:
                </h2>
                <ul className="text-sm text-gray-600 leading-6">
                  <li>{product.categoria}</li>
                </ul>
              </div>

              <div
                className={`${
                  product.disponible === "Agotado" ? "hidden" : ""
                }`}
              >
                <SelectQuantity onChange={(valor) => setQuantity(valor)} />

                <div className="text-[#4A6A8A] mt-4 font-semibold">
                  Total: ${product.price * quantity} por {quantity} "
                  {product.productName}"
                </div>

                <div className="mt-2 flex gap-4 items-center">
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center gap-2 bg-[#4A6A8A] text-white px-5 py-2 rounded-lg hover:bg-[#B0C4DE] text-sm transition-all duration-300"
                  >
                    <ShoppingCart size={18} />
                    Añadir al carrito
                  </button>

                  {showSuccess && (
                    <span className="flex items-center gap-1 text-green-600 text-sm font-medium animate-fade-in">
                      <CheckCircle size={16} />
                      Agregado con éxito
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease-in-out;
          }
        `}
      </style>
    </>
  );
}
