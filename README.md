# 🧑‍💻 Intern Dashboard  
A full-stack web app for managing internship tasks and dashboards, built using **React**, **Node.js**, and **MongoDB**.

---

## 🚀 Tech Stack  
- **Frontend:** React.js, Tailwind CSS, React Router DOM  
- **Backend:** Node.js, Express.js, MongoDB  
- **Auth:** JWT, bcrypt  
- **Other Tools:** Vite, Mongoose, Nodemon

---

## 📸 Screenshots  

### 🔐 Login Page  
![Login](./demo_screenshots/login.png)

### 📊 Dashboard  
![Dashboard](./demo_screenshots/dashboard.png)

---

## ⚙️ Steps to Run the Full Stack Project Locally  

### 1. Clone the Repository  
```bash  
git clone https://github.com/ParasWaghela07/Intern_Dashboard.git  
```

---

### 2. Set Up the Client  
```bash  
cd Intern_Dashboard/client  
npm install  
npm install @tailwindcss/vite react-router-dom  
```

---

### 3. Set Up the Server  
```bash  
cd ../server  
npm init -y  
npm install bcrypt cookie-parser cors dotenv express jsonwebtoken mongoose nodemon  
```

---

### 4. Add Script in `package.json` (inside server directory)  
```json  
"scripts": {  
  "dev": "nodemon index.js"  
}  
```

---

### 5. Create `.env` File in `server` Folder  
```
MONGO_URL=your_mongodb_connection_url  
PORT=4000  
```

---

### 6. Run the App  

Open **two terminals**:

- Run Frontend:  
```bash  
cd client  
npm run dev  
```

- Run Backend:  
```bash  
cd server  
npm run dev  
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✅ Live Demo (Optional)  
[Click here to see live app](#)

---

## 📝 License  
This project is for educational/demo purposes only.