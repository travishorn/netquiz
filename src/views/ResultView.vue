<script setup>
import { useQuizStore } from "@/stores/quiz";
import TheoryDescription from "@/components/TheoryDescription.vue";
import ResultRadarChart from "@/components/ResultRadarChart.vue";
import { theories } from "@/theories";

const quiz = useQuizStore();

const theoryNames = (ids) => {
  const names = ids.map((id) => theories[id].name);

  if (names.length === 1) {
    return names[0];
  } else if (names.length === 2) {
    return names.join(" and ");
  } else {
    const lastItem = names.pop();
    const firstPart = names.join(", ");
    return `${firstPart}, and ${lastItem}`;
  }
};
</script>

<template>
  <div v-if="quiz.resultHighest.length === 0">
    Sorry, there was not enough information to determine the Normative Ethical
    Theory you most align with.
  </div>

  <div v-else class="flex flex-col gap-6">
    <div>
      <div class="text-center">
        Your normative ethical theory is
        <span v-if="quiz.resultHighest.length > 1">a tie between</span>
      </div>
      <div class="font-bold text-2xl text-center">
        {{ theoryNames(quiz.resultHighest) }}!
      </div>
    </div>

    <ResultRadarChart :data="quiz.resultMatrix" />

    <TheoryDescription
      v-for="theoryId in quiz.resultHighest"
      :key="theoryId"
      :id="theoryId"
      :heading="quiz.resultHighest.length > 1"
    />
  </div>

  <button
    class="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded py-3 flex justify-center items-center gap-1"
    @click="quiz.restart"
  >
    Restart Quiz
  </button>
</template>
