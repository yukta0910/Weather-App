const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
 
//  const API= `https://api.openweathermap.org/data/2.5/weather?
//        q=${city}&appid=${API_KEY}&units=metric`

// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

let form = document.querySelector("form")
let searchh = document.getElementById("searchh")
let weather = document.getElementById("weather")


async function getWeather(city){

    weather.innerHTML= `<h2>Loading...</h2>`
    
    if(searchh.innerHTML.length <1){
        weather.innerHTML="";
   }

    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data);
    
}

function showWeather(data){
    if(data.cod == "404"){
       weather.innerHTML=` <h2>City Not Found</h2>`
       return;
    }

    weather.innerHTML=`
    <div>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
          <h2>${data.main.temp}℃</h2>
          <h3>${data.weather[0].main}</h3>
    </div>`

}

form.addEventListener("submit",function(event){
    getWeather(searchh.value)
    event.preventDefault(); //preventDefault method che je submit karya pachi tarat form ne reload nai kar de baki submit pachi form reload thai jaai jate
    
})

form.addEventListener("search",function(){
    if(searchh.value === ""){
    getWeather().remove();
}
    // console.log()
})

