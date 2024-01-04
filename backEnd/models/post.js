const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const User = require("./user");

class Post extends Model {}
//Sequelize will create this table if it doesn't exist on startup
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },

    images: {
      type: DataTypes.STRING,
      allowNull: true,
      get() {
        const rawValue = this.getDataValue("images");

        return rawValue ? JSON.parse(rawValue) : [];
      },
      set(value) {
        // Convertir el array de URLs a una cadena JSON antes de almacenarlo en la base de datos
        this.setDataValue("images", JSON.stringify(value));
      },
    },

    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Post;
