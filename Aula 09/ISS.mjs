const UPDATE_INTERVAL = 1000

const getISSPosition = () => fetch('http://api.open-notify.org/iss-now.json')
    .then(response => response.json())
    .then(data => data.iss_position)

setInterval(() => {
    getISSPosition()
        .then(position => console.log(`Latitude: ${position.latitude}, Longitude: ${position.longitude}`))
}, UPDATE_INTERVAL)
