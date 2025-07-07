## Table of Contents
- [Environment](#environment-dependency)
- [Installation](#installation)
- [Usage](#usage)
- [Sample Postman Collection](#postman_collection)
- [Contact](#contact)

#Clone the repository

## git clone https://github.com/your-username/your-project.git
cd your-project

## Environment Dependency
- node version: v16.18.0
- npm version: v8.19.2

## Installation
1. Make sure you have Node.js and npm installed.

2. Install dependencies:
    using "npm install".

3. Make sure you have mysql database.
    - mysql version: 8.0.32

4. Sync the database using following steps for the first time.
    - Please refer to the file src/entity/index.js and uncomment lines 34 to 40. 
    - run "npm run start:local" in comment line to create the tables in the database.
    - stop the server and Comment lines 34 to 40 in the file src/entity/index.js.
    - run "npm run start:local" in the command line.

5. Start the server:
    using "npm run start:local".

## postman_collection
please refer to the [API documentation file](https://web.postman.co/workspace/My-Workspace~f4298443-209b-4e0a-816e-e207e2f57784/collection/15735810-78f605ed-79e4-45d8-afc6-23c879539d26?action=share&source=copy-link&creator=15735810)

📬 API Endpoints
http://localhost:8081/api/bookings/list
http://localhost:8081/api/hotels/list
http://localhost:8081/api/hotels/add


