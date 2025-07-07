"use strict";

//Imports
import express from "express";
import RouterOptions from "../config/RouterOptions";
import ProcessRoutes from "./ProcessRoutes";

//Routes
import authRouters from "../otp-auth/index";
import countryRouters from "./Country";
import hotelRouters from "./Hotels";
import bookingRouters from "./Booking";

// Process Routes

//Process Auth router
let authRouter = express.Router(RouterOptions);
if (authRouters && authRouters.length > 0) {
  authRouter = ProcessRoutes(authRouter, authRouters);
} else {
  console.error("There is no user route configured");
}

//Country router
let countryRouter = express.Router(RouterOptions);
if (countryRouters && countryRouters.length > 0) {
  countryRouter = ProcessRoutes(countryRouter, countryRouters);
} else {
  console.error("There is no country route configured");
}

//hostels router
let hostelRouter = express.Router(RouterOptions);
if (hotelRouters && hotelRouters.length > 0) {
  hostelRouter = ProcessRoutes(hostelRouter, hotelRouters);
} else {
  console.error("There is no hostel route configured");
}

//booking router
let bookingRouter = express.Router(RouterOptions);
if (bookingRouters && bookingRouters.length > 0) {
  bookingRouter = ProcessRoutes(bookingRouter, bookingRouters);
} else {
  console.error("There is no booking route configured");
}

export { authRouter, countryRouter, hostelRouter, bookingRouter };
