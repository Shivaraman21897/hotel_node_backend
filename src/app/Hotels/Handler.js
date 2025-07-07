import Methods from "./Methods";
import Service from './Services';
import HttpResponse from '../../util/HttpResponse';
import ResponseHandler from '../../util/Response';
import { ControllerLog as Log, Common as CommonLog } from '../../util/Log';
import { getRequestParser, postRequestParser } from "../../util";

class HotelsHandler {
    async getHotelsList(req, res) {
        const methodName = Methods.GET_HOTELS_LIST;
        Log.MethodEnter(methodName);
        CommonLog.INFO('Received Get Hotels List');
        try {
            const response = await Service.getHotelsListServices();
            HttpResponse(res, response);
        } catch (error) {
            CommonLog.ERROR(error);
            HttpResponse(res, ResponseHandler.failure(methodName, error));
        } finally {
            Log.MethodExit(methodName);
        }
    }

    async getHotelsDetails(req, res) {
        const methodName = Methods.GET_HOTELS_DETAILS;
        Log.MethodEnter(methodName);
        CommonLog.INFO('Received Get Hotels Details');
        try {
            const data = getRequestParser(req);
            const response = await Service.getHotelsDetailsServices(data);
            HttpResponse(res, response);
        } catch (error) {
            CommonLog.ERROR(error);
            HttpResponse(res, ResponseHandler.failure(methodName, error));
        } finally {
            Log.MethodExit(methodName);
        }
    }

    async saveHotels(req, res) {
        const methodName = Methods.SAVE_HOTELS;
        Log.MethodEnter(methodName);
        CommonLog.INFO('Received Save Hotels');
        try {
            const data = postRequestParser(req);
            const response = await Service.saveHotelsServices(data);
            HttpResponse(res, response);
        } catch (error) {
            CommonLog.ERROR(error);
            HttpResponse(res, ResponseHandler.failure(methodName, error));
        } finally {
            Log.MethodExit(methodName);
        }
    }

    async updateHotels(req, res) {
        const methodName = Methods.UPDATE_HOTELS;
        Log.MethodEnter(methodName);
        CommonLog.INFO('Received Update Hotels');
        try {
            const data = postRequestParser(req);
            const response = await Service.updateHotelsServices(data);
            HttpResponse(res, response);
        } catch (error) {
            CommonLog.ERROR(error);
            HttpResponse(res, ResponseHandler.failure(methodName, error));
        } finally {
            Log.MethodExit(methodName);
        }
    }

    async deleteHotels(req, res) {
        const methodName = Methods.DELETE_HOTELS;
        Log.MethodEnter(methodName);
        CommonLog.INFO('Received Delete Hotels');
        try {
            const data = postRequestParser(req);
            const response = await Service.deleteHotelsServices(data);
            HttpResponse(res, response);
        } catch (error) {
            CommonLog.ERROR(error);
            HttpResponse(res, ResponseHandler.failure(methodName, error));
        } finally {
            Log.MethodExit(methodName);
        }
    }
}

export default new HotelsHandler();
