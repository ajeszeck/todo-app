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
  sortTaskOwner();
  form.reset();
}

function sortTaskOwner() {
  var myListContainer = document.getElementById("todo-list-me"); //parents
  var jeremyListContainer = document.getElementById("todo-list-jeremy");
  var cheriListContainer = document.getElementById("todo-list-cheri");

  myListContainer.innerHTML = "";
  jeremyListContainer.innerHTML = "";
  cheriListContainer.innerHTML = "";

  var ulMyList = document.createElement("ul");
  var ulJeremyList = document.createElement("ul");
  var ulCheriList = document.createElement("ul");

  for (var i =0; i < tasks.length; i++) {

    var currentTask = tasks[i].taskName;
    var who = tasks[i].who;
    var difficulty = tasks[i].difficulty;
    var li = document.createElement("li");

    if (who === "Me") {
      if (difficulty === "easy") {
        li.classList.add("easy");
        li.innerHTML = currentTask;
      } else if (difficulty === "moderate") {
        li.classList.add("moderate");
        li.innerHTML = currentTask;
      } else {
        li.classList.add("hard");
        li.innerHTML = currentTask;
      }
      ulMyList.appendChild(li);
      // myList.appendChild(ulMyList);
    } else if (who === "Jeremy") {
      if (difficulty === "easy") {
        li.classList.add("easy");
        li.innerHTML = currentTask;
      } else if (difficulty === "moderate") {
        li.classList.add("moderate");
        li.innerHTML = currentTask;
      } else {
        li.classList.add("hard");
        li.innerHTML = currentTask;
      }
      ulJeremyList.appendChild(li);
      // jeremyList.appendChild(ulJeremyList);
    } else {
      if (difficulty === "easy") {
        li.classList.add("easy");
        li.innerHTML = currentTask;
      } else if (difficulty === "moderate") {
        li.classList.add("moderate");
        li.innerHTML = currentTask;
      } else {
        li.classList.add("hard");
        li.innerHTML = currentTask;
      }
      ulCheriList.appendChild(li);
      // cheriList.appendChild(ulCheriList);
    }
  }
  myListContainer.appendChild(ulMyList);
  jeremyListContainer.appendChild(ulJeremyList);
  cheriListContainer.appendChild(ulCheriList);
}

function resetPage() {
  
}

// function buildList() {
//   console.log("Building a list!");
//   sortTaskOwner();
  //select the parent div for the todo-list.
  // var parent = document.getElementById("todo-list");
  // //clear existing contents of div.
  // parent.innerHTML = "";
  // sortTaskDifficulty();
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
// }

// function sortTaskDifficulty() {
//   var parent = document.getElementById("todo-list");
//   //clear existing contents of div.
//   parent.innerHTML = "";
//   var ul = document.createElement("ul");
//   for (var i = 0; i < tasks.length; i++) {
//     var currentTask = tasks[i].taskName;
//     var difficulty = tasks[i].difficulty;
//     var li = document.createElement("li");
//
//     if (difficulty === "easy") {
//       //add class of easy to li.
//       li.classList.add("easy");
//       li.innerHTML = currentTask;
//       ul.appendChild(li);
//     } else if (difficulty === "moderate") {
//         //add class of moderate to li.
//         li.classList.add("moderate");
//         li.innerHTML = currentTask;
//         ul.appendChild(li);
//     } else {
//         //add class of hard to li.
//         li.classList.add("hard");
//         li.innerHTML = currentTask;
//         ul.appendChild(li);
//     }
//   }
//   //add completed ul to the parent div.
//   parent.appendChild(ul);
// }
