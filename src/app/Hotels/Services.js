import Entity from '../../entity';
import ResponseHandler from '../../util/Response';
import Methods from "./Methods";
import { ControllerLog as Log, Common as CommonLog } from '../../util/Log';

class RoutesService {
  async getHotelsListServices() {
    const methodName = Methods.GET_HOTELS_LIST;
    Log.MethodEnter(methodName);
    try {
      const hotelsList = await Entity.Hotels.findAll({
      });
      return ResponseHandler.success(methodName, hotelsList);
    } catch (error) {
      CommonLog.ERROR(error);
      return ResponseHandler.failure(methodName, 'Sorry, something went wrong.');
    }
  }

  async getHotelsDetailsServices(data) {
    const methodName = Methods.GET_HOTELS_DETAILS;
    Log.MethodEnter(methodName);
    try {
      const hotelDetails = await Entity.Hotels.findOne({
        where: { id: data.id, isActive: 1 }
      });

      if (!hotelDetails) {
        return ResponseHandler.forbidden(methodName, 'Hotel ID not found.');
      }

      return ResponseHandler.success(methodName, hotelDetails);
    } catch (error) {
      CommonLog.ERROR(error);
      return ResponseHandler.failure(methodName, 'Sorry, something went wrong.');
    }
  }

  async saveHotelsServices(data) {
    const methodName = Methods.SAVE_HOTELS;
    Log.MethodEnter(methodName);
    try {
      const newHotel = await Entity.Hotels.create({
        ...data,
      });

      return ResponseHandler.success(methodName, newHotel);
    } catch (error) {
      CommonLog.ERROR(error);
      return ResponseHandler.failure(methodName, 'Sorry, something went wrong.');
    }
  }

  async updateHotelsServices(data) {
    const methodName = Methods.UPDATE_HOTELS;
    Log.MethodEnter(methodName);
    try {
      const hotel = await Entity.Hotels.findOne({
      });

      if (!hotel) {
        return ResponseHandler.forbidden(methodName, 'Hotel ID not found. Cannot update.');
      }

      await hotel.update({ ...data });
      return ResponseHandler.success(methodName, hotel);
    } catch (error) {
      CommonLog.ERROR(error);
      return ResponseHandler.failure(methodName, 'Sorry, something went wrong.');
    }
  }

  async deleteHotelsServices(data) {
    const methodName = Methods.DELETE_HOTELS;
    Log.MethodEnter(methodName);
    try {
      const hotel = await Entity.Hotels.findOne({
      });

      if (!hotel) {
        return ResponseHandler.forbidden(methodName, 'Hotel ID not found. Cannot delete.');
      }

      await hotel.update({ isActive: 0 });
      return ResponseHandler.success(methodName, hotel);
    } catch (error) {
      CommonLog.ERROR(error);
      return ResponseHandler.failure(methodName, 'Sorry, something went wrong.');
    }
  }
}

export default new RoutesService();
