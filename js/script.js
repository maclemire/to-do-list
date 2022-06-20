document.querySelector("#push").onclick = function (e) {
  let elInput = document.getElementById("todo-input").value;
  console.log(elInput);
  if (elInput == "") {
    alert("Ajoute une tâche");
  } else if (elInput.length < 3) {
    alert("la tâche est trop courte");
  } else if (elInput.length > 35) {
    alert("la tâche est trop longue");
  } else {
    console.log("Tout est ok pour envoyer");
    document.querySelector("#tasks").innerHTML += `
        <div class="my-3 d-flex justify-content-between align-items-center border-bottom py-3">
        <p class= "my-0 taskName">${elInput}</p>
        <button class="btn btn-danger delete">Delete</button>
        </div>
        `;

        // delete task
        let tasksDelete = document.querySelectorAll(".delete")
        console.log("tasks delete : ", tasksDelete)

        for (let i = 0; i < tasksDelete.length; i++) {
          tasksDelete[i].onclick = function (ev) {
            console.log("click delete");
            this.parentNode.remove()
          };
         }

        //  task done

        let tasksDone = document.querySelectorAll(".taskName");

        for (let i = 0; i < tasksDone.length; i++) {
          tasksDone[i].onclick = function (eve) {
            this.classList.toggle("completed")
          };
        }

        document.querySelector("#todo-input").value = ""
  }
};



// document.querySelector("#push").addEventListener('click', function () {
//     console.log("click");
// })
