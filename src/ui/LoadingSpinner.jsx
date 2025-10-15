function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="relative">
        {/* Círculo giratorio */}
        <div className="w-16 h-16 border-4 border-[#A47E3B] border-t-transparent rounded-full animate-spin"></div>

        {/* Texto opcional */}
        <p className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[#A47E3B] font-medium font-poppins">
          Cargando...
        </p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
