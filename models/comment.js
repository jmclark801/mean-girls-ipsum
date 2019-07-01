module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    comment: {
      type: DataTypes.STRING(800),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false
    }
  }, {
    timestamps: false
  }
  );
  return Comment;
};
