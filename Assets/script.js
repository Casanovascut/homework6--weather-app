var wthrApiKey = '928a790dea4c4ffa1546ae2e3cf64aef'

// make button show weather results for specific cities
$('#btn').on('click',()=>{
    let cityFinder = $('#inputBox').val()
    $.get("https://api.openweathermap.org/data/2.5/forecast?q="+cityFinder+"&appid="+wthrApiKey,function
    (data){
        console.log("data received:", data) 
        console.log(data.list[0].main.temp)  
    })
    
})


// save 5 most recent city choices underneath input field 
