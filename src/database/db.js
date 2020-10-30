//Banco de dados

const Database = require('sqlite-async')
//Isso só vai ocorrer depois que o processo anterior estiver pronto, por isso o então(then)

function execute(db){ //SE A TABELA NAO EXISTIR VAI CRIAR A TABELA
 
   return db.exec(`
    CREATE TABLE IF NOT EXISTS orphanages(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lat TEXT,
        lng TEXT,
        name TEXT,
        about TEXT,
        whatsapp TEXT,
        images TEXT,
        instructions TEXT,
        opening_hours TEXT,
        open_on_weekends TEXT

    
    );
    
    
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite') // Aqui eu crio o arquivo database.sqlite e o resultado é o db
.then(execute)