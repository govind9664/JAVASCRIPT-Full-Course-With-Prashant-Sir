let todoList=[
    {temple:'Har Har Mahadev',
    date:'15/08/2025'
    },
    {temple:'Jai Shiv Shambhu',
    date:'15/08/2025'
    }
];
displayItems();
function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');
    let todoItem=inputElement.value;
    let todoDate=dateElement.value;
    todoList.push({temple:todoItem,date:todoDate});
    inputElement.value='';
    dateElement.value='';
    displayItems()
}

function displayItems(){
    let containerElement=document.querySelector('.todo-container');
    let newHTML ='';

    for(let i=0;i<todoList.length;i++){
        // let temple=todoList[i].temple;
        // let date=todoList[i].date;
        let {temple,date}=todoList[i];
        newHTML += 
        `    <span>${temple}</span>
            <span>${date}</span>
            <button class='delete-btn' onclick='todoList.splice(${i},1); displayItems();'>Delete</button>
        `
    }
    containerElement.innerHTML=newHTML;
}