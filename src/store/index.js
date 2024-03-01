import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push({
        id: state.tasks.length + 1,
        title: task.title,
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    loadTasks(state) {
      const savedTasks = JSON.parse(localStorage.getItem("tasks"));
      if (savedTasks) {
        state.tasks = savedTasks;
      }
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
  },
  actions: {
    initializeStore({ commit }) {
      commit("loadTasks");
    },
  },
});
