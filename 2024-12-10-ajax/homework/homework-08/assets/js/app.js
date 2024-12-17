"use strict";

(() => {
    const getData = url => fetch(url).then(response => response.json())

    const generateHTML = cityWeather => {
        const newHTML =
            `
        weather is now: ${cityWeather.current.temp_c} celsius <br>
        <img src="${cityWeather.current.condition.icon}"></img>
        `
        return newHTML
    }

    const renderHTML = newHTML => document.getElementById('weatherSpan').innerHTML = newHTML

    document.getElementById('selectCity').addEventListener('change', async () => {

        try {
            // get data
            const city = document.getElementById('selectCity').value
            const cityWeather = await getData(`https://api.weatherapi.com/v1/current.json?key=7e10d9a76ab34d889b5193729241612&q=${city}`)
            console.log(cityWeather)

            // generate HTML
            const newHTML = generateHTML(cityWeather)

            // render HTML
            renderHTML(newHTML)

        } catch (e) {
            console.warn(e)
        }

    })
})()


