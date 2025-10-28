function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-gray-50">
      <div className="relative">
        {/* Círculo giratorio */}
        <div className="w-16 h-16 border-4 border-[#4A6A8A] border-t-transparent rounded-full animate-spin"></div>

        {/* Texto opcional */}
        <p className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[#4A6A8A] font-medium font-poppins">
          Cargando...
        </p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
