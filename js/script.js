document.querySelector("#push").onclick= function (e) {
    let elInput = document.getElementById("todo-input").value;
    console.log(elInput)
    if (elInput== "" ) {
        alert("Ajoute une tâche")
    } else if (elInput.length < 3) {
        alert("la tâche est trop courte")
    } else if (elInput.length > 35) {
        alert("la tâche est trop longue")
    }
    else{
        console.log("Tout est ok pour envoyer")
        document.querySelector("#tasks").innerHTML += `
        <div class="my-3 d-flex justify-content-between align-items-center">
        <p class= my-0>${elInput}</p>
        <button class="btn btn-danger">Delete</button>
        </div>
        `
    }
}



// document.querySelector("#push").addEventListener('click', function () {
//     console.log("click");
// })