import { useOutletContext, useNavigate } from "react-router-dom";
import HomeBrand from "../ui/HomeBrand";

function Prehome() {
  const navigate = useNavigate();
  const { handleSelectStore } = useOutletContext();

  const collections = [
    {
      image:
        "https://cubedubai.com/wp-content/uploads/2019/07/20190224_153924.jpg",
      title: "Sephora",
      description: "Compra maquillaje de alta gama a súper precios.",
    },
    {
      image:
        "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/RLJFYBVY4FJQRMLGDQT4OBILAE.jpg",
      title: "American Eagle",
      description: "Ropa de temporada que no encuentras en México.",
    },
    {
      image:
        "https://www.retailgazette.co.uk/wp-content/uploads/2025/01/gymshark-dubai-ext-1.jpg",
      title: "Gymshark",
      description:
        "Ropa deportiva perfecta para tener el mejor outfit del gym.",
    },
    {
      image:
        "https://th.bing.com/th/id/R.979325ea5d91d8b04c0014ccfd60954d?rik=PaDZixDi8P5u1Q&riu=http%3a%2f%2fmedia.bizj.us%2fview%2fimg%2f7368162%2ffullsizerender*1200xx3264-1833-0-182.jpg&ehk=5Au5ElpKVbz7N9W2cflYSLVxL0oBSO0HkA6IBDU6BmQ%3d&risl=&pid=ImgRaw&r=0",
      title: "Bath & Body Works",
      description: "Holders y accesorios navideños.",
    },
    {
      image:
        "https://images.foxtv.com/static.fox35orlando.com/www.fox35orlando.com/content/uploads/2020/08/1280/720/New-Target-Orlando27.jpg?ve=1&tl=1",
      title: "Target",
      description:
        "Los mejores regalos para navidad, juegos de tus licencias favoritas, termos y más.",
    },
  ];

  const handleClick = (store) => {
    handleSelectStore(store); // 🔹 Cambia la tienda seleccionada
    navigate("/home"); // 🔹 Redirige a la vista Home
  };

  return (
    <div>
      <div className="text-[#1E2A38] text-center font-extrabold sm:text-3xl text-2xl px-14 py-4 subpixel-antialiased">
        Conoce tus marcas favoritas
      </div>
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-6xl mx-auto p-6">
        {collections.map((item, index) => (
          <div key={index} onClick={() => handleClick(item.title)}>
            <HomeBrand
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prehome;
