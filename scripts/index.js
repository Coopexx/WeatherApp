const link = 'https://api.openweathermap.org/data/2.5/weather?q=NY,us,uk&APPID='

const key = config.SECRET_API_KEY

const url = link + key

async function fetchData() {
    const response = await fetch(url)
    return await response.json()
}

async function renderData() {
    const data = await fetchData()
    //For Date and Time in Local Time Zone use Google Time Zone API

    console.log(data)
    console.log(data.main.temp_min)
    console.log(data.main.temp_max)
    console.log(data.weather[0].icon) //icon number equals which weather?
    console.log(data.wind.speed)
}

renderData()
