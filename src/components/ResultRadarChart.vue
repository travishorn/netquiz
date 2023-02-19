<script setup>
import { Radar } from "vue-chartjs";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { useQuizStore } from "@/stores/quiz";
import { theories } from "../theories";

const { quizLength } = useQuizStore();

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler);

const chartData = {
  labels: Object.keys(props.data).map((id) => theories[id].name),
  datasets: [
    {
      backgroundColor: "#db2777",
      borderColor: "#db2777",
      radius: 0,
      data: Object.keys(props.data).map((id) => props.data[id]),
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    r: {
      ticks: {
        display: false,
      },
      angleLines: {
        display: false,
      },
      min: 0,
      max: quizLength,
    },
  },
};
</script>

<template>
  <Radar
    class="w-full max-w-lg mx-auto"
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>
