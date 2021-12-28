const renderData = (data) => {
    console.log(data)
    document.querySelector('.overview__day').innerHTML = data.day
    document.querySelector('.overview__time').innerHTML =
        data.hour.toString() + ':' + data.minute.toString()
    document.querySelector('.overview__city').innerHTML = data.location
    document.querySelector('.overview__weather').innerHTML = data.current
}

async function reverseGeocoding(pos) {
    const url =
        'https://nominatim.openstreetmap.org/reverse?lat=53.8187279&lon=12.0702051&format=json'

    const data = await fetchData(url)
    return data.address.city
}

async function filterData(weather, pos) {
    console.log(weather)
    const weatherCurrent = weather.current.weather[0].main
    //Get Time
    const time = new Date(weather.current.dt * 1000)
    const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
        time
    )
    const hour = time.getHours()
    const minute = time.getMinutes()

    //Get Location
    const location = await reverseGeocoding(pos)

    //Create Data Object
    const filteredData = {
        day: day,
        hour: hour,
        minute: minute,
        location: location,
        current: weatherCurrent,
    }
    return filteredData
}

async function fetchData(url) {
    const response = await fetch(url)
    return await response.json()
}

const createURL = (pos) => {
    const pos1 = '?lat=' + pos.lat
    const pos2 = '&lon=' + pos.lon
    const link = 'https://api.openweathermap.org/data/2.5/onecall'
    const key = '&APPID=' + config.SECRET_API_KEY
    const metric = '&units=metric'
    const param = '&exclude=' + 'minutely,' + 'alerts'
    const url = link + pos1 + pos2 + param + metric + key
    return url
}

const getPosition = () => {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(function (pos) {
            const lat = pos.coords.latitude
            const lon = pos.coords.longitude
            resolve({ lat, lon })
        })
    })
}

async function parseData() {
    const pos = await getPosition()
    const url = await createURL(pos)
    const data = await fetchData(url)
    const filteredData = await filterData(data, pos)
    renderData(filteredData)
}

parseData()
