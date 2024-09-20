export default {
  props: {
    question: Object,
    onAnswer: Function,
    selectedOption: String,
  },

  setup() {
    const store = Vuex.useStore();
    return { store };
  },

  template: `
  <div>
        <h1 class="text-2xl font-bold text-gray-800">{{question.title}}</h1>
        <p class="text-md text-gray-400" v-if="question.description">{{question.description}}</p>
        <label
          class="option block p-4 my-2 text-sm rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all"
          v-for="option in question.options"
          :key="option.id"
        >
          <input
            type="radio"
            class="hidden"
            name="answer[]"
            v-on:click="onAnswer(question.id, option.id)"
            :value="option.id"
          />
          {{ option.text }}
           {{ store.state.answers.get(question.id)?.includes(option.id) ? '✅' : '' }}
           
        </label>

        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          @click="onAnswer(question.id, selectedOption)"
          v-if="question.showNextButtonInsteadAuto"
        >
          Próxima
        </button>
      </div>  `,
};
