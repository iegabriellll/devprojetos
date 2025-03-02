import { Check, Star } from 'lucide-react';

// Defina a interface para o tipo 'Plano'
interface Plano {
  id: number;
  tipo: 'gratuito' | 'basico' | 'premium';
  titulo: string;
  descricao: string;
  preco: number;
  recursos: string[];
}

const PlanoCard = ({ plano }: { plano: Plano }) => {
  const isDestaque = plano.tipo === 'premium';
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${isDestaque ? 'border-2 border-indigo-500 relative transform hover:-translate-y-1' : 'hover:border border-gray-200'}`}>
      {isDestaque && (
        <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-sm font-medium">
          Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{plano.titulo}</h3>
        <p className="text-gray-600 mb-4">{plano.descricao}</p>
        
        <div className="mb-6">
          <span className="text-3xl font-bold text-gray-800">R${plano.preco}</span>
          {plano.preco > 0 && <span className="text-gray-500">/mês</span>}
        </div>
        
        <ul className="space-y-3 mb-6">
          {plano.recursos.map((recurso: string, index: number) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">{recurso}</span>
            </li>
          ))}
        </ul>
        
        <button className={`w-full py-2 rounded-md transition ${
          isDestaque 
            ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}>
          {plano.preco === 0 ? 'Começar Grátis' : 'Assinar Agora'}
        </button>
        
        {isDestaque && (
          <div className="mt-3 text-center">
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-1">Recomendado por 95% dos usuários</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanoCard;