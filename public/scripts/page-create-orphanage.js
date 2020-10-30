const map = L.map('mapid').setView([-23.413, -46.4445], 15);


//Cria e add um tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

//criar icone

const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],

})


//Criar popup overlay



//Cria e add um marcador

let marker
map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng


    //limpar icones 

    marker && map.removeLayer(marker)

    //add icon layer

    marker = L.marker([lat, lng], { icon })
        .addTo(map)

})

/* Select  de fotos */

function addPhotoField() {
    // pegar o container de fotos do id #images
    const container = document.querySelector('#images')
    // pegar o cointainer para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // clone da ultima imagem add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o campo esta vazio, se sim, nao adicionar ao container de imagens
    const input =newFieldContainer.children[0]
    if(input.value == ""){
        return
    }

    // limpar o campo antes de add imagens
    input.value = ""

    //add o clone ao container de imagens
    container.appendChild(newFieldContainer)


}


function deleteField(event){
const span = event.currentTarget
const fieldsContainer = document.querySelectorAll('.new-upload')

if(fieldsContainer.length <= 1){
   // limpar o valor

   span.parentNode.children[0].value = ""
    return
}

// deletar o campo

span.parentNode.remove();

}


// troca do sim e não

function toggleSelect (event){

    // retirar a class .active dos botoes
   document.querySelectorAll('.button-select button')
   .forEach(function(button){
     button.classList.remove('active')
    })
   
    //colocar a class .active

    const button = event.currentTarget
    button.classList.add('active')


    // atualizar input hidden com o valor selecionado

    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value

    //verificar se sim ou não 


}

