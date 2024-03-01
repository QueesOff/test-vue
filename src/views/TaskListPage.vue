<template>
  <div>
    <h1>Страница со списком задач</h1>
    <p>Выполнил: Сабыржанов Барсбек</p>
    <task-list></task-list>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList.vue";

export default {
  components: {
    TaskList,
  },
};
</script>
