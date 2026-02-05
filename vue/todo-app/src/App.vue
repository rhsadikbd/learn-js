<script setup>
import { computed, ref } from "vue";
import Task from "./components/Task.vue";
const tasks = ref([
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

const deleteTask = (id) => {
  tasks.value = tasks.value.filter(task => task.id !== id)
}

const pendingCount = computed(() =>
  tasks.value.filter(task => !task.completed).length
)
</script>

<template>
  <div id="app">
    <Task :tasks="tasks" :pending-count="pendingCount" @clear-all="tasks = []" @delete-task="deleteTask"/>
  </div>
</template>

<style scoped></style>
