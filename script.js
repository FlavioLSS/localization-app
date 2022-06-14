
let h2 = document.querySelector('h2');

function success(position){
    console.log(position.coords.latitude, position.coords.longitude);
    h2.textContent = `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`;
}

navigator.geolocation.getCurrentPosition(success);