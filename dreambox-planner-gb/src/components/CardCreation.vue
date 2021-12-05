<template>
  <div class="card-creation">
    <form action="">
      <input class="taskName" type="text" v-model="taskName" />
      <div>
        <input
          class="taskBase"
          id="taskBase"
          type="text"
          placeholder="Formulate a task"
        />
      </div>
      <div>
        <input type="date" title="Deadline" />
        <input type="checkbox" title="pereodical" />
      </div>
      <div class="controls">
        <button>+</button>
        <button>EDIT</button>
        <button>Done</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    taskName: "",
  }),
  name: "cardCreation",
  props: {
    task: Object,
  },
  mounted() {
    document.getElementById("taskBase").focus();
  },
};
</script>

<style>
form {
  padding: 8px;
}
.card-creation {
  width: 75%;
  border: 1px solid black;
  border-radius: 16px;
  margin: auto;
}
.taskName {
  width: 50%;
  border-radius: 16px;
  padding: 8px;
}
.taskBase {
  height: 100px;
  margin: 16px;
  width: 50%;
  border-radius: 16px;
  padding: 16px;
}
.controls {
  margin-top: 24px;
}
button {
  margin: 8px;
  border-radius: 4px;
}
</style>
