const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const User = require("./user");
const Post = require("./post");

class Like extends Model {}
Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: Post,
        key: "id",
      },
    },
  },

  {
    sequelize: sequelizeInstance,
    modelName: "likes",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Like;
