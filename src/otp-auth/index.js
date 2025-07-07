'use strict';

import authHandler from './authHandler'
import Methods from './Methods';
import { userRegistrationValidation, verifyOtpValidation, loginWithEmailValidation, forgetPasswordValidation, resetPasswordValidation, changePasswordValidation, userValidation, refreshTokenValidation } from '../validation/OauthValidation'
import { MediaType } from '../config/Constants';
import requestValidator from '../middlewares/requestValidator'
import { authenticateUser } from '../oauth/authenticate';

export default [
    {
        path: '/register',
        type: MediaType.POST,
        method: authHandler.createNewUser,
        options: {}
    },
    {
        path: '/login_with_email',
        type: MediaType.POST,
        method: authHandler.loginWithEamil,
        options: {}
    },
    {
        path: '/forget_password',
        type: MediaType.POST,
        method: authHandler.forgetPassword,
        middleware: [requestValidator(Methods.FORGET_PASSWORD, forgetPasswordValidation)],
        options: {}
    },
    {
        path: '/verify_otp',
        type: MediaType.POST,
        method: authHandler.verifyForgetOtp,
        middleware: [requestValidator(Methods.VERIFY_FORGET_OTP, verifyOtpValidation)],
        options: {}
    },
    {
        path: '/reset_password',
        type: MediaType.POST,
        method: authHandler.resetPassword,
        middleware: [requestValidator(Methods.RESET_PASSWORD, resetPasswordValidation)],
        options: {}
    },
    {
        path: '/change_password',
        type: MediaType.POST,
        method: authHandler.changePassword,
        middleware: [authenticateUser(), requestValidator(Methods.RESET_PASSWORD, changePasswordValidation)],
        options: {}
    },
]
