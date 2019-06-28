module.exports = function(sequelize, DataTypes) {
  var Quotes = sequelize.define("Quotes", {
    quote: {
      type: DataTypes.STRING(800),
      allowNull: false
    },
    character_name: DataTypes.STRING,
    voice_over: DataTypes.BOOLEAN
  });

  return Quotes;
};
