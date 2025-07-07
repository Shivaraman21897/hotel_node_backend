"use strict";

module.exports = function (sequelize, DataTypes) {
  const BookingDetails = sequelize.define(
    "BookingDetails",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hotelDetailsId: {
        field: "hotel_details_id",
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: DataTypes.STRING,
      emailId: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      paymentStatus: DataTypes.STRING,
    },

    {
      tableName: "booking_details",
      timestamps: false,
    }
  );
  BookingDetails.associate = function (models) {
    BookingDetails.belongsTo(models.Hotels, {
      foreignKey: "hotelDetailsId",
    });
  };

  return BookingDetails;
};

module.exports = function (sequelize, DataTypes) {
  const BookingDetails = sequelize.define(
    "BookingDetails",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hotelDetailsId: {
        field: "hotel_details_id",
        type: DataTypes.INTEGER,
        allowNull: false, // enforce that it's required if you want!
      },
      name: DataTypes.STRING,
      emailId: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      paymentStatus: DataTypes.STRING,
    },
    {
      tableName: "booking_details",
      timestamps: false,
    }
  );

  BookingDetails.associate = function (models) {
    BookingDetails.belongsTo(models.Hotels, {
      foreignKey: "hotelDetailsId",
    });
  };

  return BookingDetails;
};
