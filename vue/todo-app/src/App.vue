<script setup>
import { ref } from "vue";
import TaskCom from "./components/TaskCom.vue";
const tasksArray = ref([
  {
    id: 1,
    title: "Learn Vue JS",
    completed: true,
  },
  {
    id: 2,
    title: "Watch netflix",
    completed: true,
  },
  {
    id: 3,
    title: "Go shopping",
    completed: false,
  },
  {
    id: 4,
    title: "Learn guitar",
    completed: false,
  },
  {
    id: 5,
    title: "Send email",
    completed: false,
  },
]);
</script>

<template>
  <div id="app">
    <TaskCom />
  </div>
</template>

<style scoped></style>
