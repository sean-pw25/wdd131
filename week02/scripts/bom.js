// reference dom elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const listElement = document.querySelector("#list");

// create entry and add to list
button.addEventListener("click", function () {
    if (input.value.trim() != "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.setAttribute("aria-label", "close button")
        deleteButton.addEventListener("click", function () {
            listElement.removeChild(li)
            input.focus();
        });
        li.append(deleteButton);
        listElement.appendChild(li);
        input.value = ""
    }
    input.focus();
});