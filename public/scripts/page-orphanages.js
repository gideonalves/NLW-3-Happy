let map = L.map('mapid').setView([-23.413, -46.4445], 13);


//Cria e add um tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

//criar icone

const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

})

//Criar popup overlay



function addMarker({ id, name, lat, lng }) {

    const popup = L.popup({

        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240


    }).setContent(`${name}<a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg" > </a>`)


    //Cria e add um marcador
    L.marker([lat, lng], { icon }).addTo(map)
        .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng,
    }
    addMarker(orphanage)
})