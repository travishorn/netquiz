<script setup>
import { RouterLink } from "vue-router";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { useQuizStore } from "@/stores/quiz";

const quiz = useQuizStore();
</script>

<template>
  <RadioGroup
    class="flex flex-col gap-8"
    v-model="quiz.activeQuestion.selectedAnswer"
  >
    <RadioGroupLabel>{{ quiz.activeQuestion.text }}</RadioGroupLabel>
    <div class="space-y-2">
      <RadioGroupOption
        as="template"
        v-for="answer in quiz.activeQuestion.answers"
        :key="answer.id"
        :value="answer"
        v-slot="{ active, checked }"
      >
        <div
          :class="[
            active
              ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
              : '',
            checked ? 'bg-indigo-500 text-white ' : 'bg-white ',
          ]"
          class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
        >
          <div class="flex w-full items-center justify-between">
            <div class="flex items-center">
              <div class="text-sm">
                <RadioGroupLabel
                  as="p"
                  :class="checked ? 'text-white' : 'text-gray-900'"
                  class="font-medium"
                >
                  {{ answer.text }}
                </RadioGroupLabel>
              </div>
            </div>
            <div v-show="checked" class="shrink-0 text-white">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#fff" fill-opacity="0.2" />
                <path
                  d="M7 13l3 3 7-7"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>

  <div class="flex justify-between">
    <div class="w-1/3">
      <button
        class="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded py-3 flex justify-center items-center gap-1"
        v-if="!quiz.atStart"
        @click="quiz.prevQuestion"
      >
        <ChevronLeftIcon class="h-5 w-5" />
        Previous
      </button>
    </div>

    <div class="w-1/3">
      <button
        class="w-full bg-indigo-600 text-white rounded py-3 flex justify-center items-center gap-1"
        v-if="!quiz.atEnd && quiz.activeQuestionAnswered"
        @click="quiz.nextQuestion"
      >
        Next
        <ChevronRightIcon class="h-5 w-5" />
      </button>

      <RouterLink
        class="w-full bg-indigo-600 text-white rounded py-3 flex justify-center items-center gap-1"
        v-if="quiz.atEnd && quiz.activeQuestionAnswered"
        to="/result"
      >
        Finish
      </RouterLink>
    </div>
  </div>
</template>
