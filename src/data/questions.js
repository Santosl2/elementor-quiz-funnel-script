export const config = {
  /**
   * Nome do quiz
   */
  quizName: "Quiz exemplo",
  /**
   * URL ao ser redirecionado ao finalizar o quiz.
   */
  checkoutUrl: "https://www.google.com/",
  /**
   * Define se as query params da URL devem ser mantidas ao redirecionar para a página de checkout.
   */
  keepQueryParams: true,
};

/**
 * Array de perguntas
 *  - id: Identificador único da pergunta
 * - title: Título da pergunta
 * - description: Descrição da pergunta
 * - showNextButtonInsteadAuto: Define se o botão de próxima pergunta deve ser exibido ao invés de avançar automaticamente
 * - options: Array de opções
 *    - id: Identificador único da opção
 *    - text: Texto da opção
 *    - points: Pontos da opção
 * - isMultiple: Define se a pergunta é de múltipla escolha
 **/
export const questions = [
  {
    id: 1,
    title: "Qual é a capital do Brasil?",
    options: [
      { id: "a", text: "São Paulo", points: 0 },
      { id: "b", text: "Rio de Janeiro", points: 0 },
      { id: "c", text: "Brasília", points: 4 },
      { id: "d", text: "Salvador", points: 0 },
    ],
  },
  {
    id: 2,
    title: "Qual é a capital do Brasil 2?",
    options: [
      { id: "a", text: "São Paulo", points: 0 },
      { id: "b", text: "Rio de Janeiro", points: 0 },
      { id: "c", text: "Brasília", points: 4 },
      { id: "d", text: "Salvador", points: 0 },
    ],
  },
  {
    id: 3,
    title: "Primeira etapa concluída!",
    description: "Essa é uma pergunta com descrição",
    showNextButtonInsteadAuto: true,
    options: [],
  },

  {
    id: 4,
    title: "Por qual motivo você mora no Brasil?",
    isMultiple: true,
    options: [
      { id: "a", text: "Lorem" },
      { id: "b", text: "Lorem ipsum dolor" },
      { id: "c", text: "Lorem ipsum" },
      { id: "d", text: "Lorem ipsum 2" },
    ],
  },
];
