# 🏡 Airbnb Clone – MERN Stack

A **full-stack Airbnb-style rental platform** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.  
This project replicates key features of Airbnb such as property listings, bookings, authentication, and image uploads — all with a modern, responsive design.

---

## ✨ Features
- 🔐 User Authentication – secure signup/login with JWT
- 🏠 Property Listings – create, update, delete, and view rentals
- 🔎 Search & Filters – filter by location, price, and amenities
- 📱 Responsive UI – mobile-first design with Tailwind CSS
- ☁️ Image Uploads – integrated with Cloudinary
- 📊 Booking System – reserve stays with availability check
- ⚡ Performance – optimized with lazy loading & code splitting

---

## 🛠️ Tech Stack
- **Frontend**: React.js (Vite), Tailwind CSS, Bootstrap  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT  
- **Image Storage**: Cloudinary  
- **Tools**: Git/GitHub, VS Code  

---

## 📂 Project Structure
```
mern-airbnb-clone/
 ├── backend/        # Node.js + Express server
 │   ├── config/
 │   ├── controllers/
 │   ├── middleware/
 │   ├── models/
 │   ├── routes/
 │   └── .env.example
 ├── frontend/       # React.js (Vite) frontend
 ├── package.json
 └── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/mern-airbnb-clone.git
cd mern-airbnb-clone
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` with the following:

```env
PORT=8000
MONGODB_URL=your_mongodb_url_here
JWT_SECRET=your_jwt_secret_here
NODE_ENVIRONMENT=development
CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

Run the backend:
```bash
npm start
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 📸 Screenshots
<img width="1920" height="1080" alt="Screenshot (96)" src="https://github.com/user-attachments/assets/c8e42011-bd85-456d-9bd6-9eee66cd247e" />
<img width="1920" height="1080" alt="Screenshot (99)" src="https://github.com/user-attachments/assets/618591f6-1cd6-4035-85a2-fe0298697e2f" />
<img width="1920" height="1080" alt="Screenshot (100)" src="https://github.com/user-attachments/assets/724272ea-f49d-46aa-a12c-8b4992d1f1d1" />
<img width="1920" height="1080" alt="Screenshot (101)" src="https://github.com/user-attachments/assets/8b40e924-0d3c-4eed-92cf-cc86a70fbcd4" />
<img width="1920" height="1080" alt="Screenshot (102)" src="https://github.com/user-attachments/assets/98c26e6d-026f-421f-9bb1-04a98018dc92" />





## 👩‍💻 Author
**Nikhila Pusapelly**  
📧 [Email](mailto:nikhilapusapelly@gmail.com) | 🌐 [LinkedIn](https://www.linkedin.com/in/nikhilapusapelly/) | 💻 [GitHub](https://github.com/NikhilaPusapelly)

---

## 📜 License
This project is for **educational purposes** and is not affiliated with Airbnb.
