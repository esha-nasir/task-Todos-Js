const textBox=document.getElementById("text-box");
const listContainer=document.getElementById("list-container");


function addTask(){
  if(textBox.value===''){
    alert("You must write something");
  }else{
    let li = document.createElement("li");
    li.innerHTML = textBox.value;
    listContainer.appendChild(li);
  let span =document.createElement("span");
  span.innerHTML="\u00d7";
  li.appendChild(span);
  }
  textBox.value="";
  saveItems();

}

listContainer.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveItems();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveItems();
  }
}, false);

function saveItems(){
  localStorage.setItem("data",listContainer.innerHTML);
}

function displayItems(){
  listContainer.innerHTML = localStorage.getItem("data");
}
displayItems();