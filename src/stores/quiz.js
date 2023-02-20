import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { theories } from "@/theories";

export const useQuizStore = defineStore("quiz", () => {
  const router = useRouter();

  const questions = ref([
    {
      id: 0,
      text: "There is a runaway trolley barreling down the railway tracks. Ahead, on the tracks, there are five people tied up and unable to move. The trolley is headed straight for them. You are standing some distance off in the train yard, next to a lever. If you pull this lever, the trolley will switch to a different set of tracks. However, you notice that there is one person on the side track. What do you do?",
      answers: [
        {
          id: 0,
          text: "Do nothing, in which case the trolley will kill the five people on the main track",
          weights: {
            categoricalImperative: 1,
            naturalRights: 1,
          },
        },
        {
          id: 1,
          text: "Pull the lever, diverting the trolley onto the side track where it will kill one person",
          weights: {
            intellectualism: 1,
            stateConsequentialism: 1,
            utilitarianism: 1,
            welfarism: 1,
          },
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
          text: "Do nothing, in which case the trolley will kill the five people on the track",
          weights: {
            categoricalImperative: 1,
            contractualism: 1,
            naturalRights: 1,
          },
        },
        {
          id: 1,
          text: "Push the large man over the bridge, stopping the trolley and killing the large man",
          weights: { stateConsequentialism: 1, utilitarianism: 1 },
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
          weights: {
            utilitarianism: 1,
            contractualism: 1,
            ethicsCare: 1,
            stateConsequentialism: 1,
            welfarism: 1,
          },
        },
        {
          id: 1,
          text: "Tell the truth",
          weights: { categoricalImperative: 1 },
        },
        {
          id: 2,
          text: "Refuse to answer, even if you risk him turning on you",
          weights: { virtueEthics: 1, naturalRights: 1 },
        },
      ],
      selectedAnswer: null,
    },
    {
      id: 3,
      text: "You are flying a bomber plane in a just war. You could bomb the munitions factory or bomb the local school to undermine morale. Which of these are acceptable?",
      answers: [
        {
          id: 0,
          text: "Both, if it ends the war quicker",
          weights: { utilitarianism: 1, welfarism: 1 },
        },
        {
          id: 1,
          text: "Neither, there may be people in either",
          weights: { ethicsCare: 1 },
        },
        {
          id: 2,
          text: "Only the munitions factory because that's the only honorable option",
          weights: {
            virtueEthics: 1,
            categoricalImperative: 1,
            contractualism: 1,
            intellectualism: 1,
            naturalRights: 1,
            pragmaticEthics: 1,
            roleEthics: 1,
            stateConsequentialism: 1,
          },
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
          weights: {
            categoricalImperative: 1,
            contractualism: 1,
            intellectualism: 1,
            naturalRights: 1,
            pragmaticEthics: 1,
            preferenceUtilitarianism: 1,
            stateConsequentialism: 1,
            utilitarianism: 1,
          },
        },
        {
          id: 1,
          text: "Learning new skills to become a better person",
          weights: { virtueEthics: 1, ethicsCare: 1, roleEthics: 1 },
        },
        {
          id: 2,
          text: "Drinking, partying, and carnal debauchery",
          weights: { welfarism: 1 },
        },
      ],
      selectedAnswer: null,
    },
    {
      id: 5,
      text: "You are a member of a gang and you have been arrested with another member of your gang. Both of you are confined away from each other and you have no way of communicating with the other member. The police do not have enough evidence to convict both of you with major charges and instead offer you and the other member a bargain. If you betray the other member and he remains silent, you will be set free and he will serve 3 years in prison, but this also works vice-versa. If you betray each other, you both serve 2 years in prison. If you both remain silent, you both serve 1 year in prison. What do you do?",
      answers: [
        {
          id: 0,
          text: "Remain silent",
          weights: {
            categoricalImperative: 1,
            contractualism: 1,
            ethicsCare: 1,
            naturalRights: 1,
            pragmaticEthics: 1,
            roleEthics: 1,
            utilitarianism: 1,
            virtueEthics: 1,
            welfarism: 1,
          },
        },
        {
          id: 1,
          text: "Betray the other member and testify that he has committed the crime",
          weights: { stateConsequentialism: 1 },
        },
      ],
      selectedAnswer: null,
    },
    {
      id: 6,
      text: "While out at a restaurant, you are shocked to see your friend's spouse having dinner with a very attractive person. From the way they are behaving, it is obvious they are more than friends. They finish their meal and leave without seeing you. What do you do?",
      answers: [
        {
          id: 0,
          text: "Say nothing as it is none of your business",
          weights: { categoricalImperative: 1, naturalRights: 1 },
        },
        {
          id: 1,
          text: "Tell your friend, knowing that you may not be believed and it may ruin your friendship",
          weights: {
            contractualism: 1,
            ethicsCare: 1,
            intellectualism: 1,
            situationalEthics: 1,
            virtueEthics: 1,
            welfarism: 1,
          },
        },
      ],
      selectedAnswer: null,
    },
    {
      id: 7,
      text: "While swimming out at the beach, you notice your daughter and your niece are both caught in a strong current and are being swept out to sea. You are a good swimmer and know you may not be able to save both of them. Your daughter is a strong swimmer and your niece is a poor swimmer. What do you do?",
      answers: [
        {
          id: 0,
          text: "Save your niece first as she is a poor swimmer and is not likely to be able to last as long as your daughter",
          weights: {
            categoricalImperative: 1,
            contractualism: 1,
            ethicsCare: 1,
            intellectualism: 1,
            naturalRights: 1,
            welfarism: 1,
          },
        },
        {
          id: 1,
          text: "Save your daughter first because you cannot stand the idea of losing her",
          weights: { preferenceUtilitarianism: 1, roleEthics: 1 },
        },
      ],
      selectedAnswer: null,
    },
    {
      id: 8,
      text: "Your friend tells you that they committed a crime. They explain that they are having trouble sleeping at night and feel you are the only one they can trust with their confession. A few days later, you read in the paper that someone has been arrested for your friend's crime. What do you do?",
      answers: [
        {
          id: 0,
          text: "Go to the police and tell them what you know",
          weights: {
            categoricalImperative: 1,
            intellectualism: 1,
            stateConsequentialism: 1,
            virtueEthics: 1,
            welfarism: 1,
          },
        },
        {
          id: 1,
          text: "Encourage your friend to confess and warn him if he does not do so, you will tell",
          weights: { contractualism: 1, ethicsCare: 1 },
        },
        {
          id: 2,
          text: "Say nothing because you will not betray a friend's confidence",
          weights: {
            naturalRights: 1,
            preferenceUtilitarianism: 1,
            virtueEthics: 1,
          },
        },
      ],
      selectedAnswer: null,
    },
    {
      id: 8,
      text: "Late one night you are driving home in a bad rainstorm. A drunk reels out in front of your car and you try to stop, but hit him. Nobody sees you. The guy looks and smells as if he is homeless. You check to see how badly he is hurt and realize he is dead. You have never even had a speeding ticket and are an upright, professional, with a family and are well-known and respected in your community. What do you do?",
      answers: [
        {
          id: 0,
          text: "Make a report anonymously",
          weights: {
            contractualism: 1,
            ethicsCare: 1,
            pragmaticEthics: 1,
            roleEthics: 1,
            stateConsequentialism: 1,
            utilitarianism: 1,
            welfarism: 1,
          },
        },
        {
          id: 1,
          text: "Confess to your crime",
          weights: {
            categoricalImperative: 1,
            contractualism: 1,
            intellectualism: 1,
            naturalRights: 1,
            roleEthics: 1,
            virtueEthics: 1,
          },
        },
        {
          id: 2,
          text: "Continue to drive home and forget about it, knowing no one is going to pursue the death of a homeless drunk",
          weights: { pragmaticEthics: 1 },
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
    const initial = {};

    Object.keys(theories).forEach((key) => {
      initial[key] = 0;
    });

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
