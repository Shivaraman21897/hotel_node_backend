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
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      emailId: {
        field: "email_id",
        type: DataTypes.STRING,
      },
      phoneNumber: {
        field: "phone_number",
        type: DataTypes.STRING,
      },
      paymentStatus: {
        field: "payment_status",
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.FLOAT,  // total amount in INR
        allowNull: false,
      },
      usdAmount: {
        field: "usd_amount",
        type: DataTypes.STRING, // store USD as string for accuracy
        allowNull: false,
      },
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
