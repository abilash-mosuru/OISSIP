const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const taskCount= document.getElementById('taskCount');
let counter= localStorage.getItem('counter') || 0;

taskCount.textContent = counter;
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
        counter++;
        taskCount.textContent=counter;
        localStorage.getItem('counter', counter);
    }
    inputBox.value="";
    savedata();
}
listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            savedata();
            
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            counter--;
            taskCount.textContent=counter;
            localStorage.getItem('counter', counter);
            savedata();
        }
}, false);

function savedata(){ 
        localStorage.setItem("data",listContainer.innerHTML);
        
        localStorage.setItem("counter",taskCount.textContent );
} 
function showTask(){ 
        listContainer.innerHTML=localStorage.getItem("data"); 
        
        taskCount.textContent=localStorage.getItem('counter');
} showTask();