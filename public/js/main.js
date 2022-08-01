const { response } = require("express");

const cityname = document.getElementById("cityname");
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById("city_name");
const temp_status=document.getElementById("temp_status");
const temp = document.getElementById('temp');

const getInfo = (event)=>  {

    event.preventDefault();
    let CityVal = cityname.value;
    
   if(CityVal===""){
   
 "Write valid city name before you search!";
    }else{
        try{
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${CityVal}&units=metric&appid=285b78b3786ab6415c377e8a1132e7e8`
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];

        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;
        temp_status.innerText = arrData[0].weather[0].main;

       
    }catch{
      city_name.innerText = `City Not Found`;
    }

    }
}

submitBtn.addEventListener('click',getInfo);

   


