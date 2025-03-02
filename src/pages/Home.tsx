import { ArrowRight, Code, Brain, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          Dev<span className="text-blue-400">Projetos</span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          Desenvolva suas habilidades com projetos práticos e desafios reais.
          Conecte-se com outros desenvolvedores e evolua sua carreira.
        </p>

        <div className="flex justify-center gap-4">
          <Link 
            to="/projetos"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center text-lg font-semibold"
          >
            Começar Agora
            <ArrowRight className="ml-2" />
          </Link>
          <Link 
            to="/projetos"
            className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-900/30 transition text-lg font-semibold"
          >
            Explorar Projetos
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#1E1E1E] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Por que escolher a DevProjetos?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#2A2A2A] p-6 rounded-lg">
              <Code className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Projetos Práticos
              </h3>
              <p className="text-gray-400">
                Aprenda construindo projetos reais do mundo profissional.
                Desenvolva seu portfólio enquanto aprende.
              </p>
            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-lg">
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Desafios Técnicos
              </h3>
              <p className="text-gray-400">
                Enfrente desafios que simulam problemas reais e aprimore
                suas habilidades de resolução de problemas.
              </p>
            </div>

            <div className="bg-[#2A2A2A] p-6 rounded-lg">
              <Users className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Comunidade Ativa
              </h3>
              <p className="text-gray-400">
                Conecte-se com outros desenvolvedores, compartilhe conhecimento
                e cresça junto com a comunidade.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-[#2A2A2A] rounded-xl p-8 md:p-12 text-center">
          <Trophy className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Junte-se a outros desenvolvedores que já estão evoluindo suas
            carreiras através de projetos práticos e desafios reais.
          </p>
          <Link
            to="/projetos"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
          >
            Começar Agora
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 