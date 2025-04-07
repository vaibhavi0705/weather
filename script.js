// http://api.weatherapi.com/v1/current.json?key=3878f335c490455fb31140304250504&q=London&aqi=no


const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector('form');

form.addEventListener('submit',searchForLocation)
let target = `London`;

const fetchResults = async (targetlocation)=>{
    let url = `http://api.weatherapi.com/v1/current.json?key=3878f335c490455fb31140304250504&q=${targetlocation}&aqi=no`

    const res = await fetch(url);

    const data = await res.json();

    console.log(data);

    let locationName = data.location.name;
    let time = data.location.localtime;

    let temp = data.current.temp_c;

    let condition = data.current.condition.text
    updateDetails(temp , locationName , time , condition)
}

function updateDetails(temp , locationName , time , condition){


    

    temperatureField.innerText = temp
    locationField.innerText = locationName
    dateandTimeField.innerText = time
    conditionField.innerText = condition

}


function searchForLocation(e){
    e.preventDefault();

    target = searchField.value;

    fetchResults(target);
}
fetchResults();


function getDayName(number){
    switch(number){
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wenesday'
        case 4:
            return 'thursday'
        case 5:
            return 'Fridayday'
        case 6:
            return 'Saturday'
    }
}
