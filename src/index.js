let taskButton = document.querySelector('#create-task-form')

let toDoUl= document.querySelector('#tasks')

let blankLi= document.createElement("li")

taskButton.addEventListener("submit", function (evt) {
  evt.preventDefault()  

  //debugger;
  
  let input = evt.target['new-task-description']
  let whatUserType = input.value
  let blankLi= document.createElement("li")
  blankLi.className= `whatUserTyped`
  blankLi.innerText= whatUserType
  toDoUl.append(blankLi)
})