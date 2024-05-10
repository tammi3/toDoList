new Vue({
  el: "#vue-app",
  data: {
    completed: "",
    todo: {
      task: "",
      date: "",
      time: "",
    },
    toDos: [],
    completedToDos: [],
    
  },
  methods: {
    addTask: function () {
      if (
        this.todo.task != "" &&
        this.todo.date != "" &&
        this.todo.time != ""
      ) {
        this.toDos.push(this.todo);
        this.todo = {
          task: "",
          date: "",
          time: "",
        };
      }
    },
    removeTask: function (index) {
      this.toDos.splice(index, 1);
    },
    completedTask: function (index) {
      this.completedToDos.push(this.toDos[index])
      this.toDos.splice(index, 1);
    },
  },
});
