const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
//import keys
const User = require("./users");
const MedicalEquipment = require("./medicalEquipment");

class Assessment extends Model {}
Assessment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    equipmentID: {
      type: DataTypes.INTEGER,
      references: {
        model: MedicalEquipment,
        key: "id",
      },
    },

    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    dataInput: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Functional: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },

  {
    sequelize: sequelizeInstance,
    modelName: "assessments",
    timestamps: false, // createdAt y updatedAt for the table
    freezeTableName: true,
  }
);

module.exports = Assessment;
