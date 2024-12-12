"use strict";

(() => {

    const getCurrentLocation = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
    }

    document.getElementById('button').addEventListener('click', async () => {
        try {
            const position = await getCurrentLocation()
            console.log(position.coords)
        } catch (e) {
            console.warn(e)
        }
    })

})()


