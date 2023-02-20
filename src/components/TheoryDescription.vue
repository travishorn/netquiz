<script setup>
import { theories } from "../theories";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  heading: {
    type: Boolean,
    default: true,
  },
});

const theory = theories[props.id];

const formatNames = (names) => {
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
  <div class="flex flex-col gap-6">
    <div>
      <h2 v-if="props.heading" class="font-bold text-xl">{{ theory.name }}</h2>
      <p>{{ theory.description }}</p>
    </div>

    <p>{{ theory.problemNavigation }}</p>

    <p>
      Key proponents of {{ theory.name }} are
      {{ formatNames(theory.keyProponents) }}.
    </p>

    <a
      class="block text-center text-blue-600 hover:underline"
      :href="theory.furtherReading"
      >More information about {{ theory.name }}</a
    >
  </div>
</template>
