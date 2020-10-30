const Database = require('./database/db.js')
const saveOrphanage = require('./database/saveOrphanage.js')

module.exports = {
    index(req, res) {
        const city = req.query.city
        return res.render('index', { city })

    },

    async orphanage(req, res) {

        const id = req.query.id

        try {
            const db = await Database

            const result = await db.all(`SELECT *FROM orphanages WHERE ID = "${id}"`)
            const orphanage = result[0]

            orphanage.images = orphanage.images.split(",")
            orphanage.firstImage = orphanage.images[0]

            orphanage.open_on_weekends === "1" ? orphanage.open_on_weekends = true : orphanage.open_on_weekends = false



            return res.render('orphanage', { orphanage })
        } catch (error) {
            console.log(error)
            return res.send('Erro no BD')
        }


    },
    async orphanages(req, res) {
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT *FROM  orphanages")
            //add o orphanage pelo banco
            return res.render('orphanages', { orphanages })

        } catch (error) {
            console.log(error)
            return res.send("Erro no Banco de dados!")
        }

    },
    createOrphanage(req, res) {
        return res.render('create-orphanage')

    },

    async saveOrphanage(req, res) {
        const fields = req.body


        // validar se todos os campos estão preenchidos

        if (Object.values(fields).includes('')) {
            return res.send('Todos os campos devem ser preenchidos!')
        }
        try {
            const db = await Database
            await saveOrphanage(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends,

            })

            //redirecionamento

            return res.redirect('/orphanages')

        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')

        }



    }


}









