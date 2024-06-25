# 4800-BRIC

##Setting Up 


### Frontend
- Library: React, HTML, CSS 
https://vitejs.dev/guide/ <- vite initialiazation
https://legacy.reactjs.org/docs/getting-started.html: react documentation



    *Running the app
    cd client
    npm run dev

### Backend


- Database: Railway, postgres or mysql 
    https://railway.app/


- Library: Express
    https://expressjs.com/en/4x/api.html


    ^^installation of express and nodemon

    1. In the server directory, run the command "npm init -y". This initializes the project and creates a package.json file, which enables npm to start your project, run scripts, install dependencies.
    
    2. In the server directory, run the command "npm install express nodemon" to install the express and nodemon packages.

    3. change the value of the "script" field from { "test": "echo \"Error: no test specified\" && exit 1"}, (line 6) to { "start": "nodemon server.js" }. This specifies which file to run to start the server.

    4. After the "main" field (line 5), add the line: "type": "module"

    *** make sure to move .gitignore to the root directoryu


*running app 
    cd server 
    node app.js