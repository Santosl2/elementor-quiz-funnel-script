import { questions, config } from "./data/questions.js";
export const store = Vuex.createStore({
  state() {
    return {
      config,
      currentQuestion: 1,
      answers: new Map(),
      score: 0,
      totalQuestions: questions.length,
      questions,
    };
  },
  mutations: {
    nextQuestion(state) {
      ++state.currentQuestion;
    },
    increamentScore(state, points) {
      console.log("points", points);
      state.score += points;
    },
    increment(state) {
      state.count++;
    },
  },
});
