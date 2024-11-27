import Usuario from "./usuarioModel.js";
import Livro from "./livroModel.js";
import Registro from "./registroModel.js";

const configAssociations = () => {    
    Usuario.hasMany(Registro, { foreignKey: 'id_usuario' });
    Livro.hasMany(Registro, { foreignKey: 'id_livro' });
    Registro.belongsTo(Usuario, { foreignKey: 'id_usuario' });
    Registro.belongsTo(Livro, { foreignKey: 'id_livro' });
};
export { Usuario, Livro, Registro, configAssociations };