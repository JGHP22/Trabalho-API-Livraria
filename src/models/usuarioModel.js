import { DataTypes } from "sequelize";
import sequelize from "../connection/db.js";

const Usuario = sequelize.define('Usuario', {

    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    endereco:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true,
        },
    },
    telefone:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            is: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/i,
        },
    },
    n_registro_ativo:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate:{
            notEmpty: true,
            isInt: true,
            min: 0,
            max: 3,
        }
    },
});

export default Usuario;