document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // we need to creat a constant that identifies the form
  //user input
  //need the form
  const form = document.querySelector('#create-task-form')
   
  // listen to when the form is submitted 
  form.addEventListener('submit',function(event) {
    event.preventDefault()
    // console.log('hello')

    const taskInput = document.querySelector("#new-task-description").value

    const taskList = document.querySelector("#tasks")

    const li = document.createElement("li")
    li.textContent = taskInput
    console.log(li)

    taskList.appendChild(li)

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "❌";
    li.append(deleteBtn)

    deleteBtn.addEventListener('click',(e)=>{
      const removingLi = e.target.parentNode
      //to delete we use remove.
      removingLi.remove()
    })


    form.reset()


  
      
    })

    
    

  
  
});
