const beerNameForm = document.querySelector('.search-beer-by-name'),
    beerFoodForm = document.querySelector('.search-beer-by-food'),
    resultContainer = document.querySelector('#result'),
    foodParing = new Set();

beerNameForm.addEventListener('submit', getBeerByName);
beerFoodForm.addEventListener('submit', getBeerByFood);

function getBeerByName(event) {
    event.preventDefault();

    const beerData = new FormData(beerNameForm),
        beerName = beerData.get('beerName');

    fetch(`https://api.punkapi.com/v2/beers?beer_name=${beerName}`)
        // .then(function(response) {
        //     return response.json();
        // })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            data.forEach(function(beer) {
                const {food_pairing} = beer;

                if (!food_pairing) {
                    return ;
                }

                food_pairing.forEach(food => {
                    foodParing.add(food);
                });
            });

            console.log(foodParing);
            renderFood(foodParing);
        });
}

function getBeerByFood(event) {
    event.preventDefault();

    const foodEl = beerFoodForm.querySelector('[name="food"]'),
        food = foodEl.value,
        foodEncoded = food.replace(/\s/g, '_');

    console.log(food);

    fetch(`https://api.punkapi.com/v2/beers?food=${foodEncoded}`)
        .then(response => response.json())
        .then(data => {
            const beers = data.map(renderBeer);

            resultContainer.innerText = '';
            resultContainer.append(...beers);
        })
        .catch(error => console.log(error));
}

function renderFood(foodParing) {
    const foodEl = beerFoodForm.querySelector('[name="food"]'),
        options = [];

    foodParing.forEach(foodName => {
        const el = document.createElement('option');

        el.value= foodName;
        el.innerText = foodName;

        options.push(el);
    });

    foodEl.append(...options);
}

function renderBeer(beer) {
    const {name, description} = beer,
        beerContainer = document.createElement('div'),
        beerNameEl = document.createElement('h2'),
        beerDescriptionEl = document.createElement('p');

    beerContainer.classList.add('beer');
    beerNameEl.innerText = name;
    beerDescriptionEl.innerText = description;

    beerContainer.append(beerNameEl);
    beerContainer.append(beerDescriptionEl);

    return beerContainer;
}
