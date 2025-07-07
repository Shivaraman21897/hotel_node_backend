"use strict";

module.exports = function (sequelize, DataTypes) {
  const Hotels = sequelize.define(
    "Hotels",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hotelName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      adults: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      children: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      tableName: "hotel_details",
      timestamps: false,
    }
  );
  Hotels.associate = function (models) {
    Hotels.hasMany(models.BookingDetails, {
      foreignKey: "hotelDetailsId",
    });
  };
  return Hotels;
};

