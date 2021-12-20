const link =
    'https://api.openweathermap.org/data/2.5/weather?q=Berlin,ger,uk&APPID='

const key = config.SECRET_API_KEY

const url = link + key

async function fetchData() {
    const response = await fetch(url)
    return await response.json()
}

async function renderData() {
    const data = await fetchData()
    console.log(data)
    //Write code here
}

renderData()
