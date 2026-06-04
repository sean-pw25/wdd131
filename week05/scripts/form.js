const form = document.querySelector(`form`);
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

productOptions = document.querySelector(`#product-name`);

products.forEach((product) => {
    const option = document.createElement('option');
    option.textContent = product.name;
    option.value = product.id;
    productOptions.appendChild(option);
})

// review counter
let reviewCounter = localStorage.getItem("reviewCounter") || 0;
setReviewCounter();

form.addEventListener('submit', function (event) {
    if (form.checkValidity()) {
        reviewCounter++;
        setReviewCounter();
    } else {
        console.log("Invalid form submission");
    }
})

function setReviewCounter() {
    localStorage.setItem("reviewCounter", reviewCounter);
}