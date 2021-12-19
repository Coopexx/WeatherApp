const url =
    'https://api.openweathermap.org/data/2.5/weather?q=Berlin,ger,uk&APPID=085956f708858f21a3465350a845fa1e&units=metric'

//I stored the data in an obj, but now I have to handle asynch await
//So I need an asynch function, that fetches the data.
//I need another asynch function, that calles the fetching data function
//and that has an await statement that calls the next function which handles
//the obj data that was send.

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
