import Methods from "./Methods";
import Service from './Services';
import HttpResponse from '../../util/HttpResponse';
import ResponseHandler from '../../util/Response';
import { ControllerLog as Log, Common as CommonLog } from '../../util/Log';
import { getRequestParser, postRequestParser } from "../../util";

class BookingHandler {
    async getBookingList(req, res) {
        const methodName = Methods.GET_BOOKING_LIST;
        Log.MethodEnter(methodName);
        CommonLog.INFO('Received Get Booking List');
        try {
            const response = await Service.getBookingListServices();
            HttpResponse(res, response);
        } catch (error) {
            CommonLog.ERROR(error);
            HttpResponse(res, ResponseHandler.failure(methodName, error));
        } finally {
            Log.MethodExit(methodName);
        }
    }

    async getBookingDetails(req, res) {
        const methodName = Methods.GET_BOOKING_DETAILS;
        Log.MethodEnter(methodName);
        CommonLog.INFO('Received Get Booking Details');
        try {
            const data = getRequestParser(req);
            const response = await Service.getBookingDetailsServices(data);
            HttpResponse(res, response);
        } catch (error) {
            CommonLog.ERROR(error);
            HttpResponse(res, ResponseHandler.failure(methodName, error));
        } finally {
            Log.MethodExit(methodName);
        }
    }

  async saveBooking(req, res) {
    const methodName = Methods.SAVE_BOOKING;
    Log.MethodEnter(methodName);
    CommonLog.INFO("Received Save Booking");

    try {
      const data = postRequestParser(req);
      console.log("Parsed Booking Data:", data);

      const response = await Service.saveBookingServices(data);

      HttpResponse(res, response);
    } catch (error) {
      CommonLog.ERROR(error);
      HttpResponse(res, ResponseHandler.failure(methodName, error));
    } finally {
      Log.MethodExit(methodName);
    }
  }

    async updateBooking(req, res) {
        const methodName = Methods.UPDATE_BOOKING;
        Log.MethodEnter(methodName);
        CommonLog.INFO('Received Update Booking');
        try {
            const data = postRequestParser(req);
            const response = await Service.updateBookingServices(data);
            HttpResponse(res, response);
        } catch (error) {
            CommonLog.ERROR(error);
            HttpResponse(res, ResponseHandler.failure(methodName, error));
        } finally {
            Log.MethodExit(methodName);
        }
    }

    async deleteBooking(req, res) {
        const methodName = Methods.DELETE_BOOKING;
        Log.MethodEnter(methodName);
        CommonLog.INFO('Received Delete Booking');
        try {
            const data = postRequestParser(req);
            const response = await Service.deleteBookingServices(data);
            HttpResponse(res, response);
        } catch (error) {
            CommonLog.ERROR(error);
            HttpResponse(res, ResponseHandler.failure(methodName, error));
        } finally {
            Log.MethodExit(methodName);
        }
    }
}

export default new BookingHandler();
