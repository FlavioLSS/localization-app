
const h2 = document.querySelector('h2');

function success(position){
    console.log(position.coords.latitude, position.coords.longitude);
    h2.textContent = `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`;
    var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
        .bindPopup('Você está aqui.')
        .openPopup();
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