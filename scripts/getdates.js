const year = document.querySelector("#currentYear");
year.innerHTML = `${new Date().getFullYear()}`;

document.getElementById("lastModified").innerHTML = document.lastModified;