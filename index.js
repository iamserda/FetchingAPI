const chuckApp = document.getElementById('chuck');
const jsonApp = document.getElementById('json-placeholder');
const chuckAppDisplay = document.createElement('div');
const jsonAppDisplay = document.createElement('div');
const chuckAppButton = document.createElement('a');
const jsonAppButton = document.createElement('a');

const chuckApiUrl = 'https://api.chucknorris.io/jokes/random';
const jsonApiUrl = 'https://jsonplaceholder.typicode.com/comments/';

async function fetchAPI(Url) {
    const response = await fetch(Url);
    const data = await response.json();
    // console.log(data)
    return data;
}

chuckAppDisplay.classList.add('container', 'display');
jsonAppDisplay.classList.add('container', 'display');
jsonAppButton.classList.add('button');
chuckAppButton.classList.add('button');

jsonAppButton.textContent = "Fetch";
chuckAppButton.textContent = "Fetch";

chuckApp.append(chuckAppDisplay, chuckAppButton);
jsonApp.append(jsonAppDisplay, jsonAppButton);

chuckAppButton.addEventListener('click', async() => {
    const { icon_url, value } = await fetchAPI(chuckApiUrl);
    // console.log(icon_url, value);
    const icon = document.createElement('img');
    const quote = document.createElement('p');
    icon.src = `${icon_url}`;
    icon.alt = 'Chuck Norris';
    icon.classList.add('photo');
    quote.classList.add('text')
    quote.textContent = `${value}`;
    chuckAppDisplay.innerHTML = '';
    chuckAppDisplay.append(icon, quote);
})

jsonAppButton.addEventListener('click', async() => {
    const num = Math.floor(Math.random() * 500);
    // console.log(num)
    let apiUrl = `${jsonApiUrl}${num}`
        // console.log(apiUrl);
    const { body } = await fetchAPI(apiUrl);
    // console.log(body);
    const icon = document.createElement('img');
    const quote = document.createElement('p');
    icon.src = 'img/json.png';
    icon.alt = 'JSONPlaceholder Brand Icon';
    icon.classList.add('photo');
    quote.classList.add('text')
    quote.textContent = `${body}`;
    jsonAppDisplay.innerHTML = '';
    jsonAppDisplay.append(icon, quote);
})