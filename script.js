var tasks = [];

window.onload = function() {
  console.log("hi");
}

function addTask() {
  console.log("Added Task!");
  event.preventDefault();
  var form = document.querySelector("form");
  var newTask = {taskName: form.task.value,
                 who: form.who.value,
                 difficulty: form.difficulty.value};
  tasks.push(newTask);
  buildList();
}

function buildList() {
  console.log("Building a list!");
  //select the parent div for the todo-list.
  // var parent = document.getElementById("todo-list");
  // //clear existing contents of div.
  // parent.innerHTML = "";
  sortTaskDifficulty();
  //create ul for tasks.
  // var ul = document.createElement("ul");
  // for (var i = 0; i < tasks.length; i++) {
  //   var currentTask = tasks[i].taskName;
  //   var difficulty = tasks[i].difficulty;
  //   var li = document.createElement("li");
  //
  //   if (difficulty === "easy") {
  //     //add class of easy to li.
  //     li.classList.add("easy");
  //     li.innerHTML = currentTask;
  //     ul.appendChild(li);
  //   } else if (difficulty === "moderate") {
  //       //add class of moderate to li.
  //       li.classList.add("moderate");
  //       li.innerHTML = currentTask;
  //       ul.appendChild(li);
  //   } else {
  //       //add class of hard to li.
  //       li.classList.add("hard");
  //       li.innerHTML = currentTask;
  //       ul.appendChild(li);
  //   }
  // }
  //
  // //add completed ul to the parent div.
  // parent.appendChild(ul);
}

function sortTaskDifficulty() {
  var parent = document.getElementById("todo-list");
  //clear existing contents of div.
  parent.innerHTML = "";
  var ul = document.createElement("ul");
  for (var i = 0; i < tasks.length; i++) {
    var currentTask = tasks[i].taskName;
    var difficulty = tasks[i].difficulty;
    var li = document.createElement("li");

    if (difficulty === "easy") {
      //add class of easy to li.
      li.classList.add("easy");
      li.innerHTML = currentTask;
      ul.appendChild(li);
    } else if (difficulty === "moderate") {
        //add class of moderate to li.
        li.classList.add("moderate");
        li.innerHTML = currentTask;
        ul.appendChild(li);
    } else {
        //add class of hard to li.
        li.classList.add("hard");
        li.innerHTML = currentTask;
        ul.appendChild(li);
    }
  }

  //add completed ul to the parent div.
  parent.appendChild(ul);
}
