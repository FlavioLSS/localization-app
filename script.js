
const h2 = document.querySelector('h2');

function success(position){
    console.log(position.coords.latitude, position.coords.longitude);
    h2.textContent = `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`;
}

function error(err) {
    console.log(err);
    h2.textContent = `Error: ${'Você negou o acesso a localização'}`;
}

var watchId = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});

// navigator.geolocation.clearWatch(watchId);