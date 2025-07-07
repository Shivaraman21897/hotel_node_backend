"use strict";

import { Sequelize } from "sequelize";
import config from "../config/dbconfig.js"; 

if (!config || !config.sql) {
  console.error('No database configurations available');
  process.exit(1);
}

const databaseconfig = config.sql;

const db = {
  sequelize: new Sequelize(
    databaseconfig.database,
    databaseconfig.username,
    databaseconfig.password,
    databaseconfig
  )
};


db.OAuthAccessToken = require('./OAuthAccessToken')(db.sequelize, Sequelize.DataTypes);
db.OAuthAuthorizationCode = require('./OAuthAuthorizationCode')(db.sequelize, Sequelize.DataTypes);
db.OAuthClient = require('./OAuthClient')(db.sequelize, Sequelize.DataTypes);
db.OAuthRefreshToken = require('./OAuthRefreshToken')(db.sequelize, Sequelize.DataTypes);
db.OAuthScope = require('./OAuthScope')(db.sequelize, Sequelize.DataTypes);
db.OAuthUser = require('./OAuthUser')(db.sequelize, Sequelize.DataTypes);

db.Country = require('./Country')(db.sequelize, Sequelize.DataTypes);
db.User = require('./User')(db.sequelize, Sequelize.DataTypes);
db.Hotels = require('./Hotels')(db.sequelize, Sequelize.DataTypes);
db.BookingDetails = require('./BookingDetails')(db.sequelize, Sequelize.DataTypes);

db.Query = db.sequelize;

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize.sync({ force: true }) 
  .then(async () => {

    await db.Hotels.bulkCreate([
      {
        id: 1,
        hotelName: "Hotel Paradise",
        location: "New York",
        rooms: 2,
        adults: 2,
        children: 1,
        totalPrice: 250
      },
      {
        id: 2,
        hotelName: "Seaside Resort",
        location: "Miami",
        rooms: 3,
        adults: 3,
        children: 2,
        totalPrice: 450
      },
      {
        id: 3,
        hotelName: "Mountain Inn",
        location: "Denver",
        rooms: 1,
        adults: 2,
        children: 0,
        totalPrice: 180
      },
      {
        id: 4,
        hotelName: "Urban Hotel",
        location: "Chicago",
        rooms: 2,
        adults: 2,
        children: 1,
        totalPrice: 300
      }
    ], { ignoreDuplicates: true }); 

    console.log("Hotel data seeded!");
  })
  .catch((err) => {
    console.error("Sync error:", err);
  });

module.exports = db;
