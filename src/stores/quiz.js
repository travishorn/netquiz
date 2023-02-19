import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useQuizStore = defineStore("quiz", () => {
  const router = useRouter();

  const questions = ref([
    {
      id: 0,
      text: "There is a runaway trolley barreling down the railway tracks. Ahead, on the tracks are five people tied up and unable to move. The trolley is headed straight for them. You are standing some distance off in the train yard, next to a lever. If you pull this lever, the trolly will switch to a different set of tracks. However, you notice there is one person on the side track. What do you do?",
      answers: [
        {
          id: 0,
          text: "Pull the lever, diverting the trolley onto the side track where it will kill one person",
          selected: false,
          weights: { utilitarianism: 1 },
        },
        {
          id: 1,
          text: "Do nothing, in which case the trolley will kill the five people on the main track",
          selected: false,
          weights: { deontology: 1 },
        },
        {
          id: 2,
          text: "Spend ages trying to make a noble decision and run out of time",
          selected: false,
          weights: { virtueEthics: 1 },
        },
        {
          id: 3,
          text: "Grab some popcorn and enjoy the show",
          selected: false,
          weights: { ethicalEgoism: 1 },
        },
      ],
      selectedAnswer: null,
    },
    {
      id: 1,
      text: "As before, a trolley is hurtling down a track towards five people. You are on a bridge under which it will pass, and you can stop it by putting something very heavy in front of it. As it happens, there is a very fat man next to you - your only way to stop the trolley is to push him over the bridge and onto the track. What do you do?",
      answers: [
        {
          id: 0,
          text: "Push the man, killing him to save five",
          selected: false,
          weights: { utilitarianism: 1 },
        },
        {
          id: 1,
          text: "Don't push the man because that would be actively killing someone",
          selected: false,
          weights: { deontology: 1 },
        },
        {
          id: 2,
          text: "Don't push the man because you know you can't look him in the eyes and do it",
          selected: false,
          weights: { virtueEthics: 1 },
        },
        {
          id: 3,
          text: "Take the man's wallet, then push him",
          selected: false,
          weights: { ethicalEgoism: 1 },
        },
      ],
      selectedAnswer: null,
    },
    {
      id: 2,
      text: "A madman with an axe knocks on your door and asks you where he can find your friend. What do you do?",
      answers: [
        {
          id: 0,
          text: "Lie about your friend's location and tip off the police",
          selected: false,
          weights: { utilitarianism: 1 },
        },
        {
          id: 1,
          text: "Tell the truth",
          selected: false,
          weights: { deontology: 1 },
        },
        {
          id: 2,
          text: "Refuse to answer, even if you risk him turning on you",
          selected: false,
          weights: { virtueEthics: 1 },
        },
        {
          id: 3,
          text: "Tell the truth... for a price",
          selected: false,
          weights: { ethicalEgoism: 1 },
        },
      ],
      selectedAnswer: null,
    },
    {
      id: 3,
      text: "You are flying a bomber place in a just war. You could bomb the munitions factory or bomb the local school to undermine morale. Which of these are acceptable?",
      answers: [
        {
          id: 0,
          text: "Both, if it ends the war quicker",
          selected: false,
          weights: { utilitarianism: 1 },
        },
        {
          id: 1,
          text: "Neither, there may be people in either",
          selected: false,
          weights: { deontology: 1 },
        },
        {
          id: 2,
          text: "Only the munitions factory because that's the only honorable option",
          selected: false,
          weights: { virtueEthics: 1 },
        },
        {
          id: 3,
          text: "Both, plus the rest of the city for a high score",
          selected: false,
          weights: { ethicalEgoism: 1 },
        },
      ],
      selectedAnswer: null,
    },
    {
      id: 4,
      text: "What are your plans for the weekend?",
      answers: [
        {
          id: 0,
          text: "Studying to become a scientist and change the world",
          selected: false,
          weights: { utilitarianism: 1 },
        },
        {
          id: 1,
          text: "Going to church",
          selected: false,
          weights: { deontology: 1 },
        },
        {
          id: 2,
          text: "Learning new skills to become a better person",
          selected: false,
          weights: { virtueEthics: 1 },
        },
        {
          id: 3,
          text: "Drinking, partying, and carnal debauchery",
          selected: false,
          weights: { ethicalEgoism: 1 },
        },
      ],
      selectedAnswer: null,
    },
  ]);

  const activeQuestionIndex = ref(0);

  const activeQuestion = computed(() => {
    return questions.value[activeQuestionIndex.value];
  });

  const activeQuestionAnswered = computed(() => {
    return activeQuestion.value.selectedAnswer !== null;
  });

  const atStart = computed(() => {
    return activeQuestionIndex.value === 0;
  });

  const atEnd = computed(() => {
    return activeQuestionIndex.value == questions.value.length - 1;
  });

  const resultMatrix = computed(() => {
    const initial = {
      utilitarianism: 0,
      deontology: 0,
      virtueEthics: 0,
      ethicalEgoism: 0,
    };

    return questions.value.reduce((acc, curr) => {
      if (curr.selectedAnswer !== null) {
        Object.keys(curr.selectedAnswer.weights).forEach((key) => {
          acc[key] += curr.selectedAnswer.weights[key];
        });
      }

      return acc;
    }, initial);
  });

  const resultHighest = computed(() => {
    let highest = [];

    Object.keys(resultMatrix.value).forEach((key) => {
      if (highest.length === 0 && resultMatrix.value[key] > 0) {
        highest = [key];
      } else if (
        highest.length !== 0 &&
        resultMatrix.value[key] > resultMatrix.value[highest[0]]
      ) {
        highest = [key];
      } else if (
        highest.length !== 0 &&
        resultMatrix.value[key] == resultMatrix.value[highest[0]]
      ) {
        highest.push(key);
      }
    });

    return highest;
  });

  const quizLength = computed(() => questions.value.length);

  function nextQuestion() {
    if (!atEnd.value) activeQuestionIndex.value += 1;
  }

  function prevQuestion() {
    if (!atStart.value) activeQuestionIndex.value -= 1;
  }

  function restart() {
    questions.value.forEach((question) => {
      question.selectedAnswer = null;
    });

    activeQuestionIndex.value = 0;

    router.push("/");
  }

  return {
    activeQuestion,
    activeQuestionAnswered,
    atStart,
    atEnd,
    resultMatrix,
    resultHighest,
    quizLength,
    nextQuestion,
    prevQuestion,
    restart,
  };
});
