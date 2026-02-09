//notes container
const notesContainer = document.querySelector(".notes-container");
//note create button
const createBtn = document.querySelector(".btn");
//note input box
let notes = document.querySelectorAll(".input-box");

//display all the notes from the local storage
const displayNotes = () => {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
//initial notes display call
displayNotes();

//svae notes in the local storage
const updateNotes = () => {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

//add lister with the note create button
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("P");
    let img = document.createElement("IMG");
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateNotes()
})

//input box write edit delete listener
notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateNotes();
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = () => updateNotes();
        })
    }
})