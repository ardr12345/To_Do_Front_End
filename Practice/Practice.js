var button_content=document.querySelector("div")

button_content.addEventListener("click",updateName)

function updateName(){
    var name=prompt("Enter a new name");
    button_content.textContent="Player1:"+name;
}

function addName(){
    var name=prompt("Enter a New name");
    button_content.textContent="Player1:"+name;
}