const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl:false
}
//get values from html
const lat = document.querySelector('[data-lat]').dataset.lat
const lng = document.querySelector('[data-lng]').dataset.lng

let map = L.map('mapid', options).setView([ lat , lng], 15);



//Cria e add um tileLayer


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

//criar icone

const icon = L.icon({
    iconUrl : '/images/map-marker.svg',
    iconSize : [58,68],
    iconAnchor: [29,68],
    popupAnchor:[170,2]

})





//Cria e add um marcador
L.marker([lat ,lng], {icon}).addTo(map)
    
    

/*Galeria de imagem*/
function selectImage(event){
    const button = event.currentTarget
    
    /*Remover Classe active*/
const buttons = document.querySelectorAll(".images button")
buttons.forEach(removeActiveClass) //para cada botão ele vai fazer essa ação


function removeActiveClass(button){
    button.classList.remove("active")


}


console.log(buttons)

    //selecionar a imagem clicada

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")


    // atualizar o container de imagem
imageContainer.src = image.src
    // adicionar a classe .active para o botao clicado
     button.classList.add("active")
}