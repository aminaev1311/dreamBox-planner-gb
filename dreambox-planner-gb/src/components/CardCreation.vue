<template>
  <div class="card-creation">
    <form action="">
      <input class="taskName" type="text" v-model="task.title" />
      <div>
        <input
          class="taskBase"
          id="taskBase"
          type="text"
          placeholder="Formulate a task"
          v-model="task.text"
        />
      </div>
      <div>
        <input type="date" title="Deadline" v-model="task.deadline" />
        <!-- <input type="checkbox" title="pereodical" /> -->
      </div>
      <div class="controls">
        <div class="addBtn" @click="sendData(task)">+</div>
        <!-- <button>EDIT</button>
        <button>Done</button> -->
      </div>
    </form>
  </div>
</template>

<script>
import { POST_URL } from "../misc/constants.js";
import { mapMutations } from "vuex";

export default {
  data: () => ({
    task: {
      title: null,
      text: "",
      deadline: null,
    },
  }),
  name: "cardCreation",
  methods: {
    ...mapMutations(["addTask"]),
    async sendData(formData) {
      let data = formData;
      if (!data.title) {
        data.title = data.text.split(" ").slice(0, 3).join(" ");
      }
      data = JSON.stringify(data);
      console.log(data);
      const fetchOptions = {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: "json=" + data,
      };
      try {
        let serverMsg = await fetch(POST_URL, fetchOptions)
          .then((response) => {
            let serverRes = response.json();
            return serverRes;
          })
          .then((data) => {
            return data;
          });
        // .catch((error) => {
        //   console.log("Error occured: ", error.message);
        // });
        if (serverMsg) {
          //only if the server return a message, i.e. success, add to store
          this.addTask(this.task);
          this.$emit("taskAdded");
        }
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  mounted() {
    document.getElementById("taskBase").focus();
  },
};
</script>

<style scoped>
form {
  padding: 8px;
}
.card-creation {
  width: 50%;
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
/*button {*/
/*  margin: 8px;*/
/*  border-radius: 4px;*/
/*}*/
.addBtn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 18px;
  font-size: 28px;
  color: white;
  margin: auto;
  background: #62013c;
  transition: 0.5s;
}
.addBtn:hover {
  transition: 0.5s;
  background: #400027;
}
</style>
