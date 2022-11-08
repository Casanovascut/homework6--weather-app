var wthrApiKey = '928a790dea4c4ffa1546ae2e3cf64aef'
var cardContainerEl = document.getElementById('cardContainer')
// make button show weather results for specific cities
function weatherRemove(){

}

$('#btn').on('click',()=>{
    let cityFinder = $('#inputBox').val()
    $.get("https://api.openweathermap.org/data/2.5/forecast/?q="+cityFinder+"&appid="+wthrApiKey,function
    (data){
        console.log("data received:", data) 
       // return 5 day weather data
        $('.weather-remove').remove()
        for(var i = 0;i<41;i+=8){
        //create card containers and put them in the card container element
            var wthrCardEl = document.createElement('div')
            wthrCardEl.classList.add('card', 'weather-remove')
            var cardBdy = document.createElement('div')
            cardBdy.classList.add('card-body')
            var crdtxt = document.createElement('p')
            crdtxt.classList.add('card-text')
            var crdtitle = document.createElement('h5')
            crdtitle.classList.add('card-title')
            var crdImg = document.createElement('img')
            var iconCde= data.list[i].weather[0].icon
            crdImg.src = "http://openweathermap.org/img/w/" + iconCde + ".png"
            crdImg.classList.add('card-img-top')
            cardContainerEl.appendChild(wthrCardEl)
            wthrCardEl.appendChild(crdImg)
            wthrCardEl.appendChild(cardBdy)
            cardBdy.appendChild(crdtitle)
            cardBdy.appendChild(crdtxt)
            crdtitle.textContent = data.list[i].dt_txt
            var kelvin = data.list[i].main.temp
            crdtxt.textContent = 'temp: '+Math.floor(((kelvin-273.15)*1.8)+32)+"F"

    }})
    
})


// save 5 most recent city choices underneath input field 
