"use script";

export default dbconfig();

function dbconfig() {
    console.log('Environment : ' + process.env.NODE_ENV)
    switch (process.env.NODE_ENV) {
        case "local":
            return {
                sql: {
                    host: "localhost",
                    database: "trip",
                    username: "root",
                    password: "root",
                    dialect: "mysql",
                    logging: true,
                    maxConcurrentQueries: 1000,
                    omitNull: true,
                    native: true,
                    language: "en"
                }
            };
        case "production":
            return {
                sql: {
                    host: "localhost",
                    database: "ngo",
                    username: "root",
                    password: "",
                    dialect: "mysql",
                    logging: true,
                    maxConcurrentQueries: 1000,
                    omitNull: true,
                    native: true,
                    language: "en",
                    dialectOptions: {
                        option: {
                            requestTimeout: 120000
                        }
                    }
                }
            };
        
        default:
            return {
                sql: {
                    host: "localhost",
                    database: "ngo",
                    username: "root",
                    password: "root",
                    dialect: "mysql",
                    logging: true,
                    maxConcurrentQueries: 1000,
                    omitNull: true,
                    native: true,
                    language: "en"
                }
            };
    }
}