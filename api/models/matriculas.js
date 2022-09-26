'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {

    static associate(models) {
      // define association here
      Matriculas.belongsTo(models.Pessoas)
      Matriculas.belongsTo(models.Turmas)
    }
  }
  Matriculas.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Matriculas',
  });
  return Matriculas;
};