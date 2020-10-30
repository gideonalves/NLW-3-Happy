//importar pacote e plugin

const express = require('express') // Chama minha dependencia
const path = require('path')
const server = express()
const pages = require('./pages.js')
server

//utilizar body do req

.use(express.urlencoded({ extended: true}))
.use(express.static('public'))
// configurar template engfine

.set('views',path.join
(__dirname,"views"))
.set('view engine', 'hbs')
//criar rotas
.get('/', (pages.index))
.get('/create-orphanage', (pages.createOrphanage))
.get('/orphanages', (pages.orphanages))
.get('/orphanage', (pages.orphanage))
.post('/save-orphanage',pages.saveOrphanage)
    //return  response.sendFile(path.join(__dirname, 'views'))

//ligar o servidor

server.listen(5500);


/*request - requisição
Response - resposta
GET e POST

GET - Todas as vezes que quero fazer um pedido

POST - Todas as vezes que quero salvar algo


tipos de dados enviados

queryStrings - são aqueles enviados via url e são objetos
O Body é passado o form

Template Engine

Pacotes instalados = express, nodemon, hbs

express = Nosso servidor
nodemon = Atualiza o server sem precisar ficar parando
HBS = Template engine

npm start

































*/
