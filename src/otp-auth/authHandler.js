
import ResponseHandler from '../util/Response';
import HttpResponse from '../../src/util/HttpResponse';
import Methods from './Methods';
import { getUserIdByToken, postRequestParser } from '../util';
import Service from './authService';
import { ControllerLog as Log, Common as CommonLog } from '../util/Log';



class createUser {
  async createNewUser(req, res) {
    const methodName = Methods.GET_TOKEN;
    Log.MethodEnter(methodName);
    try {
      CommonLog.INFO('Received Create New User');
      const data = postRequestParser(req)
      const response = await Service.createNewUserServices(data);
      Log.MethodExit(methodName);
      await HttpResponse(res, response);
    } catch (error) {
      CommonLog.ERROR(error);
      Log.MethodExit(methodName);
      return HttpResponse(res, ResponseHandler.failure(methodName))
    }
  }

  async loginWithEamil(req, res) {
    const methodName = Methods.USER_TOKEN;
    Log.MethodEnter(methodName);
    try {
      CommonLog.INFO('Received Login With Email and password');
      const data = postRequestParser(req)
      const response = await Service.loginWithEamilServices(data);
      Log.MethodExit(methodName);
      await HttpResponse(res, response);
    } catch (error) {
      CommonLog.ERROR(error);
      Log.MethodExit(methodName);
      return HttpResponse(res, ResponseHandler.failure(methodName))
    }
  }

  async forgetPassword(req, res) {
    const methodName = Methods.FORGET_PASSWORD;
    Log.MethodEnter(methodName);
    try {
      CommonLog.INFO('Received Forget password');
      const data = postRequestParser(req)
      const response = await Service.forgetPasswordServices(data);
      Log.MethodExit(methodName);
      await HttpResponse(res, response);
    } catch (error) {
      CommonLog.ERROR(error);
      Log.MethodExit(methodName);
      return HttpResponse(res, ResponseHandler.failure(methodName))
    }
  }

  async verifyForgetOtp(req, res) {
    const methodName = Methods.VERIFY_FORGET_OTP;
    Log.MethodEnter(methodName);
    try {
      CommonLog.INFO('Received Verify Forget OTP');
      const data = postRequestParser(req)
      const response = await Service.verifyForgetOtpServices(data);
      Log.MethodExit(methodName);
      await HttpResponse(res, response);
    } catch (error) {
      CommonLog.ERROR(error);
      Log.MethodExit(methodName);
      return HttpResponse(res, ResponseHandler.failure(methodName))
    }
  }

  async resetPassword(req, res) {
    const methodName = Methods.RESET_PASSWORD;
    Log.MethodEnter(methodName);
    try {
      CommonLog.INFO('Received Reset Password');
      const data = postRequestParser(req)
      const response = await Service.resetPasswordServices(data);
      Log.MethodExit(methodName);
      await HttpResponse(res, response);
    } catch (error) {
      CommonLog.ERROR(error);
      Log.MethodExit(methodName);
      return HttpResponse(res, ResponseHandler.failure(methodName))
    }
  }

  async changePassword(req, res) {
    const methodName = Methods.CHANGE_PASSWORD;
    Log.MethodEnter(methodName);
    try {
      CommonLog.INFO('Received Change Password');
      const data = postRequestParser(req)
      const userId = getUserIdByToken(req)
      const response = await Service.changePasswordServices(data, userId);
      Log.MethodExit(methodName);
      await HttpResponse(res, response);
    } catch (error) {
      CommonLog.ERROR(error);
      Log.MethodExit(methodName);
      return HttpResponse(res, ResponseHandler.failure(methodName))
    }
  }
}
export default new createUser()




