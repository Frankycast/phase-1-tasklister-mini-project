let taskButton = document.querySelector('#create-task-form')

let toDoUl= document.querySelector('#tasks')

let blankLi= document.createElement("li")

taskButton.addEventListener("submit", (evt) =>{
  evt.preventDefault()
  let form = evt.target
  let blankLi= document.createElement("li")
  //blankLi.className= `toDoList`
  blankLi.innerText= `testing`
  toDoUl.append(blankLi)
})