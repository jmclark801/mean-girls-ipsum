module.exports = function(sequelize, DataTypes) {
  var Quotes = sequelize.define("Quotes", {
    quote: {
      type: DataTypes.STRING(800),
      allowNull: false
    },
    characterName: DataTypes.STRING,
    voiceOver: DataTypes.BOOLEAN
  });

  return Quotes;
};
