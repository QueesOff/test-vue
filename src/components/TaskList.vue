<template>
  <div>
    <h2>Список задач</h2>
    <router-link to="/tasks/new">Создать новую задачу</router-link>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }} -
        <router-link :to="'/tasks/' + task.id">Редактировать</router-link> |
        <button @click="deleteTask(task.id)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  methods: {
    deleteTask(taskId) {
      this.$store.commit("deleteTask", taskId);
    },
  },
};
</script>
