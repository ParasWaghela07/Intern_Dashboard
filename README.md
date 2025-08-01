STEPS TO RUN THE FULL STACK PROJECT IN YOUR LOCAL MACHINE  :

Step 1 : Clone the repository using "git clone https://github.com/ParasWaghela07/Intern_Dashboard.git"
Step 2 : move to client directory and run the following commands to install required dependencies
         npm install (for node_modules)
         npm install @tailwindcss/vite (for tailwind-css)
         npm install react-router-dom (for routing)
Step 3 : Go to server directory and run the following command to install required dependencies
         npm init -y
         npm install bcrypt cookie-parser cors dotenv express jsonwebtoken mongoose nodemon
Step 4 : "dev" : "nodemon index.js" ( Paste this line into scripts in package.json file in server directory)
Step 5 : create an ".env" file in server directory like
        MONGO_URL=Your_Mongodb_url
        PORT=4000
Step 6 : open 2 terminals and run "npm run dev" in each directory "client" and "server" to start the client and server and visit localhost:5173 in browser
  
