module.exports = function(sequelize, DataTypes) {
  var Quotes = sequelize.define("Quotes", {
    quote: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    characterName: DataTypes.STRING,
    voiceOver: DataTypes.BOOLEAN,
    
  }, {
    timestamps: false
  });

  return Quotes;
};
