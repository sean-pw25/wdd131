// reference dom elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// create entry and add to list
button.addEventListener("click", function () {
    if (input.value.trim() != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});


function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    list.append(li);
    deleteButton.setAttribute("aria-label", "close button");
    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}


function setChapterList() {
    localStorage.setItem('Chapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('Chapters'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

