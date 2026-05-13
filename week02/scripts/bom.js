// reference dom elements
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

// create entry and add to list
buttonElement.addEventListener("click", function () {
    if (inputElement.value.trim() != "") {
        const li = document.createElement("li");
        li.textContent = inputElement.value;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.setAttribute("aria-label", "close button")
        deleteButton.addEventListener("click", function () {
            listElement.removeChild(li)
            inputElement.focus();
        });
        li.append(deleteButton);
        listElement.appendChild(li);
        inputElement.value = ""
    }
    inputElement.focus();
});