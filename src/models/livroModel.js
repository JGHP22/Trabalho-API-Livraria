import { DataTypes } from "sequelize";
import sequelize from "../connection/db.js";

const Livro = sequelize.define('Livro', {

    id_livro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    autor:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    genero:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ano_publicacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 1500,
            max: new Date().getFullYear(),
        },
    },
    disponivel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
});

export default Livro;