import sequelize from './src/connection/db.js';
import app from './app.js';

sequelize.sync( () => 
    console.log(`Banco de dados conectado:`)
);

app.listen(3000, () => 
    console.log('Servidor iniciado na porta 3000')
);