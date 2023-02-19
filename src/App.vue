<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="min-h-screen flex items-center">
    <h1
      class="text-center absolute top-0 w-full font-bold bg-pink-600 text-white p-2 pb-3"
    >
      Normative Ethical Theory Quiz
    </h1>
    <div class="container max-w-4xl mx-auto p-4 flex flex-col gap-8">
      <RouterView />
    </div>
  </div>
</template>
