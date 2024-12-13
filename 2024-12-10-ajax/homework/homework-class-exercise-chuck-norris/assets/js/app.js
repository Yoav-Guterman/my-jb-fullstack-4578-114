"use strict";

(() => {

    const getData = async (url) => {
        const response = await fetch(url); // Waits for the fetch to complete
        return await response.json();      // Waits for the JSON parsing to complete
    };

    const generateHTML = joke => `${joke.value}`


    const renderHTML = newHTML => document.getElementById('chuckNorrisJoke').innerHTML = newHTML

    const displayChuckNorrisJoke = async () => {
        try {
            // get data
            const jokes = await getData('https://api.chucknorris.io/jokes/random')

            // generate html
            const newHTML = generateHTML(jokes)

            // render html
            renderHTML(newHTML)

        } catch (e) {
            console.warn(e)
        }
    }

    document.getElementById('button').addEventListener('click', () => {
        setInterval(displayChuckNorrisJoke, 5000)
    })
})()


