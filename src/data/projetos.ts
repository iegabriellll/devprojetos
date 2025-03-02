export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  nivel: 'junior' | 'pleno' | 'senior';
  tipo: 'web' | 'backend' | 'mobile' | 'desktop' | 'fullstack';
  tecnologias: string[];
  dicas?: string[];
  recursos?: { titulo: string; url: string }[];
  imagem?: string;
}

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Todo App",
    descricao: "Aplicativo de gerenciamento de tarefas com React e TypeScript",
    nivel: "junior",
    tipo: "web",
    tecnologias: ["react", "typescript", "tailwind"]
  },
  {
    id: 2,
    titulo: "API REST",
    descricao: "API RESTful com Node.js e Express",
    nivel: "junior",
    tipo: "backend",
    tecnologias: ["node", "express", "mongodb"]
  },
  {
    id: 3,
    titulo: "E-commerce",
    descricao: "Loja virtual completa com React e Node.js",
    nivel: "pleno",
    tipo: "fullstack",
    tecnologias: ["react", "node", "postgresql"]
  },
  {
    id: 4,
    titulo: "API de Gerenciamento de Tarefas",
    descricao: "Desenvolva uma API RESTful para gerenciamento de tarefas com autenticação e autorização.",
    nivel: "pleno",
    tipo: "backend",
    tecnologias: ["node", "express", "mongodb"],
    dicas: [
      "Implemente autenticação com JWT",
      "Crie endpoints para CRUD de tarefas",
      "Adicione validação de dados com Joi ou Yup",
      "Implemente testes unitários e de integração"
    ],
    recursos: [
      {
        titulo: "Guia de autenticação com JWT",
        url: "https://jwt.io/introduction/"
      },
      {
        titulo: "Documentação do Express",
        url: "https://expressjs.com/pt-br/"
      }
    ]
  },
  {
    id: 5,
    titulo: "Sistema de Microserviços",
    descricao: "Desenvolva um sistema distribuído com microserviços para um aplicativo de delivery de comida.",
    nivel: "senior",
    tipo: "backend",
    tecnologias: ["node", "docker", "kubernetes", "rabbitmq"],
    dicas: [
      "Divida o sistema em serviços: usuários, restaurantes, pedidos, pagamentos",
      "Implemente comunicação assíncrona entre serviços com RabbitMQ",
      "Utilize Docker para containerização e Kubernetes para orquestração",
      "Implemente padrões de resiliência como Circuit Breaker"
    ],
    recursos: [
      {
        titulo: "Padrões de Microserviços",
        url: "https://microservices.io/patterns/index.html"
      },
      {
        titulo: "Guia de Docker e Kubernetes",
        url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/"
      }
    ]
  },
  {
    id: 6,
    titulo: "Aplicativo de Finanças Pessoais",
    descricao: "Desenvolva um aplicativo para controle de finanças pessoais com gráficos e relatórios.",
    nivel: "pleno",
    tipo: "mobile",
    tecnologias: ["react-native", "firebase"],
    dicas: [
      "Utilize Firebase para autenticação e armazenamento de dados",
      "Implemente gráficos interativos para visualização de gastos",
      "Adicione notificações para lembretes de pagamentos",
      "Implemente sincronização offline"
    ],
    recursos: [
      {
        titulo: "Documentação do React Native",
        url: "https://reactnative.dev/docs/getting-started"
      },
      {
        titulo: "Guia do Firebase",
        url: "https://firebase.google.com/docs"
      }
    ]
  },
  {
    id: 7,
    titulo: "Sistema de Análise de Dados",
    descricao: "Crie um sistema para coleta, processamento e visualização de dados em tempo real.",
    nivel: "senior",
    tipo: "fullstack",
    tecnologias: ["python", "react", "kafka", "elasticsearch"],
    dicas: [
      "Utilize Kafka para processamento de streams de dados",
      "Implemente ETL com Python",
      "Armazene dados processados em Elasticsearch",
      "Crie dashboards interativos com React e D3.js"
    ],
    recursos: [
      {
        titulo: "Guia de Apache Kafka",
        url: "https://kafka.apache.org/documentation/"
      },
      {
        titulo: "Tutorial de D3.js",
        url: "https://d3js.org/getting-started"
      }
    ]
  },
  {
    id: 8,
    titulo: "Aplicativo de Clima",
    descricao: "Desenvolva um aplicativo que mostra previsões do tempo com base na localização do usuário.",
    nivel: "junior",
    tipo: "web",
    tecnologias: ["html", "css", "javascript"],
    dicas: [
      "Utilize a API de Geolocalização do navegador",
      "Integre com uma API de previsão do tempo como OpenWeatherMap",
      "Implemente cache de dados para reduzir requisições",
      "Adicione animações baseadas nas condições climáticas"
    ],
    recursos: [
      {
        titulo: "Documentação da API OpenWeatherMap",
        url: "https://openweathermap.org/api"
      },
      {
        titulo: "Guia de Geolocalização",
        url: "https://developer.mozilla.org/pt-BR/docs/Web/API/Geolocation_API"
      }
    ]
  },
  {
    id: 9,
    titulo: "Rede Social para Desenvolvedores",
    descricao: "Crie uma rede social focada em desenvolvedores, com compartilhamento de código e projetos.",
    nivel: "senior",
    tipo: "fullstack",
    tecnologias: ["react", "node", "graphql", "mongodb"],
    dicas: [
      "Implemente uma API GraphQL para consultas eficientes",
      "Crie um editor de código com syntax highlighting",
      "Adicione funcionalidades de seguir usuários e curtir publicações",
      "Implemente um sistema de notificações em tempo real com WebSockets"
    ],
    recursos: [
      {
        titulo: "Documentação do GraphQL",
        url: "https://graphql.org/learn/"
      },
      {
        titulo: "Tutorial de WebSockets",
        url: "https://developer.mozilla.org/pt-BR/docs/Web/API/WebSockets_API"
      }
    ]
  }
];