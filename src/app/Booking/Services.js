import Entity from '../../entity';
import ResponseHandler from '../../util/Response';
import Methods from './Methods';
import { ControllerLog as Log, Common as CommonLog } from '../../util/Log';

class RoutesService {
  async getBookingListServices() {
    const methodName = Methods.GET_BOOKING_LIST;
    Log.MethodEnter(methodName);
    try {
      const bookingList = await Entity.BookingDetails.findAll({
      });
      return ResponseHandler.success(methodName, bookingList);
    } catch (error) {
      CommonLog.ERROR(error);
      return ResponseHandler.failure(methodName, 'Sorry, something went wrong.');
    }
  }

  async getBookingDetailsServices(data) {
    const methodName = Methods.GET_BOOKING_DETAILS;
    Log.MethodEnter(methodName);
    try {
      const bookingDetails = await Entity.BookingDetails.findOne({
      });

      if (!bookingDetails) {
        return ResponseHandler.forbidden(methodName, 'Booking ID not found.');
      }

      return ResponseHandler.success(methodName, bookingDetails);
    } catch (error) {
      CommonLog.ERROR(error);
      return ResponseHandler.failure(methodName, 'Sorry, something went wrong.');
    }
  }

  async saveBookingServices(data) {
    const methodName = Methods.SAVE_BOOKING;
    Log.MethodEnter(methodName);

    try {
      if (!data.hotelDetailsId || !data.paymentStatus || !data.amount) {
        throw new Error("Missing required booking details");
      }

      const saveBooking = await Entity.BookingDetails.create({
        hotelDetailsId: data.hotelDetailsId,
        name: data.name || null,
        emailId: data.emailId || null,
        phoneNumber: data.phoneNumber || null,
        paymentStatus: data.paymentStatus,
        amount: data.amount,
        usdAmount: data.usdAmount,
      });

      CommonLog.INFO(`Booking saved with ID: ${saveBooking.id}`);

      return ResponseHandler.success(methodName, saveBooking);
    } catch (error) {
      CommonLog.ERROR(error);
      return ResponseHandler.failure(
        methodName,
        "Sorry, something went wrong."
      );
    } finally {
      Log.MethodExit(methodName);
    }
  }

  async updateBookingServices(data) {
    const methodName = Methods.UPDATE_BOOKING;
    Log.MethodEnter(methodName);
    try {
      const findBooking = await Entity.BookingDetails.findOne({
      });

      if (!findBooking) {
        return ResponseHandler.forbidden(methodName, 'ID not found. Cannot update.');
      }

      await findBooking.update({ ...data });
      return ResponseHandler.success(methodName, findBooking);
    } catch (error) {
      CommonLog.ERROR(error);
      return ResponseHandler.failure(methodName, 'Sorry, something went wrong.');
    }
  }

  async deleteBookingServices(data) {
    const methodName = Methods.DELETE_BOOKING;
    Log.MethodEnter(methodName);
    try {
      const findBooking = await Entity.BookingDetails.findOne({
      });

      if (!findBooking) {
        return ResponseHandler.forbidden(methodName, 'ID not found. Cannot delete.');
      }

      await findBooking.update({ isActive: 0 });
      return ResponseHandler.success(methodName, findBooking);
    } catch (error) {
      CommonLog.ERROR(error);
      return ResponseHandler.failure(methodName, 'Sorry, something went wrong.');
    }
  }
}

export default new RoutesService();
