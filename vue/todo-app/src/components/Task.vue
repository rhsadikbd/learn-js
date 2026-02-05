<script setup>
const props = defineProps({
  tasks: Array,
  pendingCount: Number
})

const emit = defineEmits(['clear-all', 'delete-task'])

const deleteTask = (id) => {
  emit('delete-task', id)
}
</script>

<template>
  <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1>To Do List</h1>
      </div>
      <!-- form -->
      <div class="form">
        <input type="text" placeholder="New Task" />
        <button><i class="fas fa-plus"></i></button>
      </div>
      <!-- task lists -->
      <div class="taskItems">
        <ul>
          <li v-for="task in tasks" :key="task.id">
            <button>{{ task.title }}</button>
            <button @click="deleteTask(task.id)"><i class="far fa-trash-alt"></i></button>
          </li>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button>Clear completed</button>
        <button @click="$emit('clear-all')">Clear all</button>
      </div>
      <!-- pending task -->
      <div class="pendingTasks">
        <span>Pending Tasks: {{ pendingCount }}</span>
      </div>
    </div>
  </div>
</template>
