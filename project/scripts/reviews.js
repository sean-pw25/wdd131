const review = document.querySelector('#review')

let reviews = [
    { name: "Emily Reneau", stars: 5, content: "Working with Tricia at Ashwood Dog Training was a great experience for my dog, Molly, and me. We learned so much in just a few sessions...Ashwood Dog Training was more than worth the investment." },

    { name: "Ryan Beeler", stars: 5, content: "Great training and multiple ways to train your dog. You can do group, pack walks or small groups or even one on one...(She has very affordable options that don't break the bank) Thank you!" },

    { name: "Benedicte Kehr", stars: 5, content: "I cannot recommend Tricia highly enough! From our first meeting, she demonstrated a remarkable understanding of dog behavior and immediately connected with my dog...The results have been incredible..." },

    { name: "Mary Wells", stars: 5, content: "As a client of Ashwood Dog Training, I have received a common sense approach to training my rescue dog...Thank you to Tricia for helping to take an unruly mutt to his full potential!" },

    { name: "rob hasse", stars: 5, content: "Highly recommend! Very knowledgeable and proffesional and worked very well training the puppy and teaching me how to train as well." }
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function cycleReviews() {
    for (let i = 0; i < reviews.length; i++) {
        review.innerHTML = `<p id="review-name">${reviews[i].name}</p><p id="review-stars">${GetReviewStars(reviews[i].stars)}</p><p>"${reviews[i].content}"</p>`;
        await sleep(10000)
    }
    cycleReviews();
}

function GetReviewStars(stars) {
    switch (stars) {
        case 1:
            return "★☆☆☆☆";
            break;
        case 2:
            return "★★☆☆☆";
            break;
        case 3:
            return "★★★☆☆"
            break;
        case 4:
            return "★★★★☆"
            break;
        case 5:
            return "★★★★★"
            break;
    }
}

cycleReviews();