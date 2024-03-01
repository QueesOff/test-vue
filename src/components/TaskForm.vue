<template>
  <div>
    <h2>{{ editing ? "Редактировать" : "Создать" }} задачу</h2>
    <form @submit.prevent="submitForm">
      <label for="title">Название задачи:</label>
      <input v-model="task.title" id="title" type="text" required />
      <button type="submit">{{ editing ? "Обновить" : "Создать" }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TaskForm",
  data() {
    return {
      task: {
        id: null,
        title: "",
      },
      editing: false,
    };
  },
  methods: {
    submitForm() {
      if (this.editing) {
        this.$store.commit("updateTask", this.task);
      } else {
        this.$store.commit("createTask", this.task);
      }
      this.$router.push("/tasks");
    },
  },
  created() {
    const taskId = this.$route.params.id;
    if (taskId) {
      const task = this.$store.state.tasks.find(
        (t) => t.id === parseInt(taskId)
      );
      if (task) {
        this.editing = true;
        this.task = { ...task };
      }
    }
  },
};
</script>
