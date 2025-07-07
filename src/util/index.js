import config from "../config";
import axios from 'axios';

export const getRequestParser = (req) => req.query;

export const postRequestParser = (req) => req.body;

export const getUserIdByToken = (req) => req.user.id;

export const getRoleIdByToken = (req) => req.user.roleId;

export const encryptPass = (password) => {
    var result = require("crypto").createHash("sha256").update(password, "utf8").digest("hex");
    return result;
}



export const otpMessage = (countryCode, mobileNo, message) => {

    const baseUrl = `${config.oneWaySmsUrl}?apiusername=API1PPAAVNFNM&apipassword=API1PPAAVNFNM1PPAA&mobileno=${countryCode + mobileNo}&senderid=MASTERMYNA&languagetype=1&message=${message}`;
    axios.get(baseUrl).then(resp => {
        console.log('Resp OTP: ', resp);
        return resp.data
    }).catch((error) => {
        console.log('Error OTP: ', error);
        throw error
    })

}
