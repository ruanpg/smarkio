const { Model, DataTypes } = require('sequelize');

class Filme extends Model {
    static init(sequelize){
        super.init({
            titulo: DataTypes.STRING,
            ano: DataTypes.INTEGER,
            imagem: DataTypes.STRING,
            descricao: DataTypes.STRING(1024),
            genero: DataTypes.STRING,
        }, {
            sequelize,
            modelName:'Filme'
        })
    }
}
 
module.exports = Filme;