//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
  getTasksToDo() {
    const filterData = this.tasks.filter((task) => {
      return task.completed === false;

      // console.log(task.completed);
    });
    return filterData;
  },
  tasks: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],
};
// console.log("test");
console.log(tasks.getTasksToDo());
// console.log(tasks.filterData());
