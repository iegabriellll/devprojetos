import { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, Star, Award } from 'lucide-react';

// Defina a interface para o tipo 'Desafio'
interface Desafio {
  id: number;
  titulo: string;
  nivel: string;
  requisitos: string[];
  descricao: string;
  tempoEstimado: string;
  dicas: string;
}

const DesafioCard = ({ desafio }: { desafio: Desafio }) => {
  const [expandido, setExpandido] = useState(false);

  const getNivelClasse = (nivel: string) => {
    switch (nivel) {
      case 'junior':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'pleno':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'senior':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  // Simulação de dificuldade baseada no ID
  const dificuldade = Math.min(5, Math.max(1, Math.floor((desafio.id % 5) + 1)));

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-l-4 ${getNivelClasse(desafio.nivel)}`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <Award size={20} className="mr-2 text-indigo-600" />
            <h3 className="text-xl font-bold text-gray-800">{desafio.titulo}</h3>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getNivelClasse(desafio.nivel)}`}>
            {desafio.nivel.charAt(0).toUpperCase() + desafio.nivel.slice(1)}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{desafio.descricao}</p>
        
        <div className="flex items-center text-gray-500 mb-4">
          <Clock size={16} className="mr-1" />
          <span>Tempo estimado: {desafio.tempoEstimado}</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className="mr-2 text-sm text-gray-600">Dificuldade:</span>
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < dificuldade ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
              />
            ))}
          </div>
          
          <button 
            className="flex items-center text-indigo-600 hover:text-indigo-800"
            onClick={() => setExpandido(!expandido)}
          >
            {expandido ? (
              <>
                <ChevronUp size={16} className="mr-1" />
                Mostrar menos
              </>
            ) : (
              <>
                <ChevronDown size={16} className="mr-1" />
                Mostrar mais
              </>
            )}
          </button>
        </div>
        
        {!expandido && (
          <button className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            onClick={() => setExpandido(true)}>
            Ver Detalhes
          </button>
        )}
        
        {expandido && (
          <div className="mt-4 border-t pt-4">
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Requisitos</h4>
              <ul className="list-disc pl-5 text-gray-600">
                {desafio.requisitos.map((requisito, index) => (
                  <li key={index}>{requisito}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Dicas</h4>
              <p className="text-gray-600">{desafio.dicas}</p>
            </div>
            
            <div className="mt-4">
              <button className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                Iniciar Desafio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesafioCard;