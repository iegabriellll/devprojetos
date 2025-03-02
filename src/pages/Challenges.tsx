const Challenges = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-4">Desafios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#1E1E1E] p-8 rounded-xl border border-gray-800 hover:border-blue-400 transition">
          <h3 className="text-xl font-bold text-white mb-3">Em Breve</h3>
          <p className="text-gray-400">
            Novos desafios serão adicionados em breve. Fique ligado!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Challenges; 