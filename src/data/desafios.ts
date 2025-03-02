export const desafios = [
  {
    id: 1,
    titulo: "Inverter uma String",
    descricao: "Crie uma função que inverta uma string sem usar métodos prontos como reverse().",
    nivel: "junior",
    tempoEstimado: "30 minutos",
    requisitos: [
      "A função deve receber uma string como parâmetro",
      "Deve retornar a string invertida",
      "Não utilize métodos prontos como reverse()",
      "Considere casos de strings vazias"
    ],
    dicas: "Tente usar um loop que percorra a string de trás para frente, ou considere usar recursão para uma solução mais elegante."
  },
  {
    id: 2,
    titulo: "Verificador de Palíndromos",
    descricao: "Implemente uma função que verifica se uma palavra ou frase é um palíndromo (lê-se igual de trás para frente).",
    nivel: "junior",
    tempoEstimado: "45 minutos",
    requisitos: [
      "A função deve ignorar espaços, pontuação e diferenças entre maiúsculas e minúsculas",
      "Deve retornar true para palíndromos e false caso contrário",
      "Exemplos de palíndromos: 'Ana', 'A man, a plan, a canal, Panama!'"
    ],
    dicas: "Primeiro, limpe a string removendo caracteres não alfanuméricos e convertendo para minúsculas. Depois, compare a string com sua versão invertida."
  },
  {
    id: 3,
    titulo: "Implementação de Fila (Queue)",
    descricao: "Implemente uma estrutura de dados de fila (FIFO - First In, First Out) com operações básicas.",
    nivel: "pleno",
    tempoEstimado: "1 hora",
    requisitos: [
      "Implemente os métodos: enqueue (adicionar), dequeue (remover), peek (visualizar próximo) e isEmpty",
      "A implementação deve ter complexidade O(1) para todas as operações",
      "Adicione tratamento para casos de fila vazia"
    ],
    dicas: "Você pode usar um array como estrutura subjacente, mas lembre-se que remover do início de um array é O(n). Considere usar dois ponteiros ou duas pilhas para otimizar."
  },
  {
    id: 4,
    titulo: "Encontrar Números Duplicados",
    descricao: "Desenvolva um algoritmo que encontre todos os números duplicados em um array.",
    nivel: "pleno",
    tempoEstimado: "1 hora",
    requisitos: [
      "A função deve receber um array de números",
      "Deve retornar um array contendo apenas os números que aparecem mais de uma vez",
      "Otimize para eficiência de tempo e espaço"
    ],
    dicas: "Considere usar um objeto ou Map para contar as ocorrências de cada número. Alternativamente, se os números estiverem em um intervalo específico, você pode usar o algoritmo de Floyd's Tortoise and Hare."
  },
  {
    id: 5,
    titulo: "Implementação de LRU Cache",
    descricao: "Implemente um cache LRU (Least Recently Used) com operações de get e put em tempo O(1).",
    nivel: "senior",
    tempoEstimado: "2 horas",
    requisitos: [
      "O cache deve ter um tamanho máximo definido na inicialização",
      "Quando o cache estiver cheio, a inserção de um novo item deve remover o item menos recentemente usado",
      "As operações get e put devem ter complexidade de tempo O(1)"
    ],
    dicas: "Combine uma estrutura de hash (objeto ou Map) para acesso rápido com uma lista duplamente encadeada para manter a ordem de uso. Quando um item é acessado, mova-o para o final da lista."
  },
  {
    id: 6,
    titulo: "Balanceamento de Parênteses",
    descricao: "Crie uma função que verifique se uma expressão com parênteses, colchetes e chaves está corretamente balanceada.",
    nivel: "junior",
    tempoEstimado: "1 hora",
    requisitos: [
      "A função deve verificar se todos os parênteses '()', colchetes '[]' e chaves '{}' abrem e fecham na ordem correta",
      "Deve retornar true se a expressão estiver balanceada e false caso contrário",
      "Exemplos: '(){}[]' é válido, '([)]' não é válido"
    ],
    dicas: "Utilize uma pilha para rastrear os caracteres de abertura. Ao encontrar um caractere de fechamento, verifique se ele corresponde ao último caractere de abertura na pilha."
  },
  {
    id: 7,
    titulo: "Implementação de Árvore Binária de Busca",
    descricao: "Implemente uma árvore binária de busca com operações de inserção, busca e travessia.",
    nivel: "senior",
    tempoEstimado: "3 horas",
    requisitos: [
      "Implemente uma classe Node e uma classe BinarySearchTree",
      "Adicione métodos para inserir, buscar, remover e percorrer a árvore (in-order, pre-order, post-order)",
      "Implemente um método para verificar se a árvore é válida (todos os nós à esquerda são menores e todos à direita são maiores)"
    ],
    dicas: "Comece implementando a estrutura básica e as operações de inserção e busca. Para a remoção, considere os três casos: nó folha, nó com um filho e nó com dois filhos."
  },
  {
    id: 8,
    titulo: "Algoritmo de Dijkstra",
    descricao: "Implemente o algoritmo de Dijkstra para encontrar o caminho mais curto em um grafo ponderado.",
    nivel: "senior",
    tempoEstimado: "4 horas",
    requisitos: [
      "Crie uma representação de grafo usando lista de adjacências",
      "Implemente o algoritmo de Dijkstra para encontrar o caminho mais curto entre dois vértices",
      "Retorne tanto a distância quanto o caminho percorrido"
    ],
    dicas: "Use uma fila de prioridade (min-heap) para selecionar o próximo vértice a ser visitado. Mantenha um array de distâncias e um array de predecessores para reconstruir o caminho."
  }
];