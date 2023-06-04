const url = "https://cat-fact.herokuapp.com/facts";

const resultsContainer = document.querySelector(".results");

async function getCats() {

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    const facts = data.all;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts. length; i++) {
        console.log(facts[i].text);

        if (i === 10) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${facts[i].text}</div>`;

    }
}

getCats();