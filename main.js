// Write integration via node-fetch to wheater api.

// Return api in specific range

const fetch = require('node-fetch');

async function main() {
    let data = await getWeather();
    console.log(data);

}

async function getWeather() {
    let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`);
    let data = await res.json();
    return data;
}

main();