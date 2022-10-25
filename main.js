// Write integration via node-fetch to wheater api.

// Return api in specific range

const fetch = require('node-fetch');

async function main() {
    let data = await getWeather(); // default request for testing.
    console.log(data);

    let texasData = await getWeather(31.9686, 99.9018, 7); // get texas wheater for 7 days
    console.log(texasData);

}


// default lat and lon for London.
async function getWeather(lat = 51.5074, lon = 0.1278, days = 5) {
    let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`);
    let data = await res.json();
    return data;
}

main();