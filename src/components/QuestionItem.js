export default {
  props: {
    question: Object,
    onAnswer: Function,
  },

  template: `
  <div>
        <h1 class="text-2xl font-bold text-gray-800">{{question.title}}</h1>
        <label
          class="option block p-4 my-2 text-sm rounded-md bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all"
          v-for="option in question.options"
          :key="option.id"
        >
          <input
            type="radio"
            class="hidden"
            name="answer[]"
            v-on:change="onAnswer(question.id, option.id)"
            :value="option.id"
          />
          {{ option.text }}
        </label>
      </div>  `,
};
