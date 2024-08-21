function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskList = document.getElementById("taskList");

        const li = document.createElement("li");
        li.textContent = taskText;

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = () => {
            li.classList.toggle("completed");
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => {
            taskList.removeChild(li);
        };

        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        taskInput.value = "";
    }
}
