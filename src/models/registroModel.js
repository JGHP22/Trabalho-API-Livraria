import { DataTypes } from "sequelize";
import sequelize from "../connection/db.js";
import { Livro, Usuario } from "./associations.js";

const Registro = sequelize.define('Registro', {

id_registro:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
id_livro:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
        model: Livro,
        key: 'id_livro'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
},
id_usuario:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Usuario,
        key: 'id_usuario',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
},
data_emprestimo:{
    type: DataTypes.DATE,
    allowNull: false,
},
data_devolucao_prevista:{
    type: DataTypes.DATE,
    allowNull: false,
},
data_devolucao_real:{
    type: DataTypes.DATE,
},
status:{
    type: DataTypes.ENUM('emprestado', 'devolvido', 'atrasado'),
    allowNull: false,
    defaultValue: 'emprestado',
},
});

export default Registro;