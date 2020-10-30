const Database = require('./db.js')
const saveOrphanage = require('./saveOrphanage.js')

Database.then(async db =>{ // quando eu uso o async eu posso usar o await.
   //Inserir dados na table 
 await saveOrphanage(db,{
    lat: "-23.7341936",
    lng: "-46.9213497",
    name : "Lar dos Meninos",
    about: "Horário de visita das 18h até 8h",
    whatsapp:"11981346031",
    images:[
        "https://images.unsplash.com/photo-1600712242868-18d4e92fb599?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "https://images.unsplash.com/photo-1576024267263-70f1caffd6fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    
    ].toString(),
    instructions:"Venha como se sentir.",
    opening_hours:"Horário de visita das 18h até 8h",
    open_on_weekends:"0"

 })
 
 
    /*await db.run(`
    INSERT INTO orphanages (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
    ) VALUES (
        "-23.423",
        "-46.4645",
        "Lar dos Meninos",
        "Presta assistencia a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        "11981346031",
        "https://images.unsplash.com/photo-1600712242868-18d4e92fb599?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        "Horário de visita das 18h até 8h",
        "0"
        );   
    `)*/

    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT *FROM  orphanages")
   console.log(selectedOrphanages)
//  consultar somente 1 orphanato, pelo ID
  // const orphanage = await db.all('SELECT *FROM orphanages WHERE ID = "1"')
  // console.log(orphanage)

 // deletar dado da table

//console.log(await db.run("DELETE FROM orphanages")) // Removo tudo de uma vez
//  console.log(await db.run("DELETE FROM orphanages WHERE ID = '5'")) // Removo por ID
//  console.log(await db.run("DELETE FROM orphanages WHERE ID = '6'"))
//  console.log(await db.run("DELETE FROM orphanages WHERE ID = '7'"))
//  console.log(await db.run("DELETE FROM orphanages WHERE ID = '8'"))
//  console.log(await db.run("DELETE FROM orphanages WHERE ID = '9'"))
//  console.log(await db.run("DELETE FROM orphanages WHERE ID = '10'"))
//  console.log(await db.run("DELETE FROM orphanages WHERE ID = '11'"))
//  console.log(await db.run("DELETE FROM orphanages WHERE ID = '12'"))
//  console.log(await db.run("DELETE FROM orphanages WHERE ID = '13'"))
//  console.log(await db.run("DELETE FROM orphanages WHERE ID = '14'"))
//  console.log(await db.run("DELETE FROM orphanages WHERE ID = '15'"))
//  console.log(await db.run("DELETE FROM orphanages WHERE ID = '16'"))
 

})