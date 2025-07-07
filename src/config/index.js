'use script';

export default value();

function value() {
    console.log('Environment : ' + process.env.NODE_ENV)
    switch (process.env.NODE_ENV) {
        case 'development':
            return {
                responseCode: {
                    BAD_REQUEST: 400,
                    UNAUTHORIZED: 401,
                    SUCCESS: 200,
                },
                userType: {
                    Customer: 1,
                },
                host: process.env.IP,
                port: 80,
                socketPort: 8086,
                limit: 100,
                offset: 0,
                oauthAccessTokenTime: 3601 * 24,
                oauthRefreshTokenTime: 1209601,
            };
        case 'local':
            return {
                responseCode: {
                    BAD_REQUEST: 400,
                    UNAUTHORIZED: 401,
                    SUCCESS: 200,
                },
                userType: {
                    Customer: 1,
                },
                host: process.env.IP,
                port: 8081,
                socketPort: 8086,
                limit: 100,
                offset: 0,
                oauthAccessTokenTime: 3601 * 24,
                oauthRefreshTokenTime: 1209601,
            };
        case 'production':
            return {
                responseCode: {
                    BAD_REQUEST: 400,
                    UNAUTHORIZED: 401,
                    SUCCESS: 200,
                },
                userType: {
                    Customer: 1,
                },
                host: process.env.IP,
                port: 8080,
                socketPort: 8086,
                oauthAccessTokenTime: 3601 * 24,
                oauthRefreshTokenTime: 1209601,
            };
        default:
            return {
                responseCode: {
                    BAD_REQUEST: 400,
                    UNAUTHORIZED: 401,
                    SUCCESS: 200,
                },
                userType: {
                    Customer: 1,
                },
                host: process.env.IP,
                port: 8085,
                socketPort: 8086,
                oauthAccessTokenTime: 3601 * 24,
                oauthRefreshTokenTime: 1209601,
            };
    }
};