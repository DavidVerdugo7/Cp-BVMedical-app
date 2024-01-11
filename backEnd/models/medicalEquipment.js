const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class MedicalEquipment extends Model {}
//Sequelize will create this table if it doesn't exist on startup

MedicalEquipment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    shortCode: {
      type: DataTypes.STRING,
      allowNull: true, // Revisar si debe ser nullable o no
    },
    equipmentType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    madeBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: true,
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

    // id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: User,
    //   },
    // },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "medicalEquipment",
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = MedicalEquipment;
