"use script";

import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import "./util/global";
import OAuth from "./oauth";

//Routes configuration
import { authRouter, countryRouter, hostelRouter,bookingRouter } from "./app";

const App = express();

// parse application/json
App.use(bodyParser.json({ limit: "50mb", extended: true }));
App.use(bodyParser.urlencoded({ limit: "2mb", extended: true }));
App.use(express.static(path.join(__dirname, "public")));
App.use(cors());

// Allow to expose custom header
App.use(function (req, res, next) {
  res.header(
    "Access-Control-Expose-Headers",
    "Access-Control-Allow-Credentials,Authorization,x-Authorization"
  );
  next();
});

OAuth(App);

App.use("/api/auth", authRouter);
App.use("/api/country", countryRouter);
App.use("/api/hotels", hostelRouter);
App.use("/api/bookings", bookingRouter);

export default App;
