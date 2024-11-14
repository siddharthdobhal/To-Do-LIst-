const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Checkbox to mark as completed
        li.addEventListener("click", function () {
            li.classList.toggle("checked");
            if (li.classList.contains("checked")) {
                li.querySelector(".checkbox").style.backgroundImage = "url(images/checked.png)";
            } else {
                li.querySelector(".checkbox").style.backgroundImage = "url(images/unchecked.png)";
            }
        });

        // Create a close button to remove individual task
        let closeBtn = document.createElement("span");
        closeBtn.innerHTML = "\u00D7"; // Unicode for '×'
        closeBtn.classList.add("close");
        closeBtn.onclick = function () {
            li.remove();
        };

        // Add checkbox for check/uncheck task
        let checkbox = document.createElement("span");
        checkbox.classList.add("checkbox");
        li.appendChild(checkbox);

        li.appendChild(closeBtn);
        listContainer.appendChild(li);

        inputBox.value = ""; // Clear input field
    }
}

// Function to clear all tasks
function clearTasks() {
    listContainer.innerHTML = "";
}
