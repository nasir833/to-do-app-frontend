document.querySelector(".task").addEventListener("click", function () {
    document.querySelector(".main-main").classList.add("main-main-remove")
    document.querySelector(".main-main").classList.remove("remove-icon")
    document.querySelector(".main").classList.remove("main-remove");
    document.querySelector(".main").classList.remove("start-remove");

});
document.querySelector(".add").addEventListener("click", function () {
    document.querySelector(".main-main").classList.remove("main-main-remove");
    document.querySelector(".main-main").classList.add("remove-icon");
    document.querySelector(".main").classList.add("main-remove");

});

document.querySelector(".adding").addEventListener("click", function () {
    document.querySelector(".main-main").classList.add("main-main-remove")
    document.querySelector(".main-main").classList.remove("remove-icon")
    document.querySelector(".main").classList.remove("main-remove");
    document.querySelector(".main").classList.remove("start-remove");

});
// APP Functionality 

// Adding note to tasks 
var userTasks = [];
// outer div 
var tasks = document.createElement("div");
tasks.classList.add("tasks");
var whereToPutTasks = document.querySelector(".main");
whereToPutTasks.appendChild(tasks);

document.querySelector(".add-note").addEventListener("click", function () {
    document.querySelector(".tasks").innerHTML="";
    var addNote = document.getElementById("discription").value;                 //user typedd note
    userTasks.push(addNote);                     



    // inner div 
    for(var i=0; i<userTasks.length; i++){
        var list = document.createElement("div");
        list.classList.add("list"+i);
        list.classList.add("listadd");
        var whereToPutList = document.querySelector(".tasks");
        whereToPutList.appendChild(list);
    }

    for(var i=0; i<userTasks.length; i++){
        var p = document.createElement("div");
        p.classList.add("p"+i);
        p.classList.add("padd");
        var whereToPutP = document.querySelector(".list"+i);
        whereToPutP.appendChild(p);
    }

    for(var i=0; i<userTasks.length; i++){
        var input = document.createElement("input");
        input.classList.add("chkbx"+i);
        input.classList.add("chkbx");
        input.setAttribute('id', 'checkbx');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', 'check');
        var whereToPutInput = document.querySelector(".p"+i);
        whereToPutInput.appendChild(input);
    }

    for(var i=0; i<userTasks.length; i++){
        var userv = document.createElement("p");
        var textOfNote = document.createTextNode(userTasks[i])
        userv.appendChild(textOfNote);
        userv.classList.add("userv"+i);
        userv.classList.add("userv");
        var whereToPutUserv = document.querySelector(".p"+i);
        whereToPutUserv.appendChild(userv);
    }
});
























































































// ------------------------------------------------- FOOTER -------------------------------------------------
var today = new Date().getFullYear();
document.querySelector(".copyright-year").innerHTML = `<em>${today}</em>`;
document.querySelector(".dev-by").innerHTML = "<em>Muhammad Nasir</em>"