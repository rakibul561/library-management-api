
# 📚 Library Management API

A RESTful API built with **Express.js**, **Mongoose**, and **TypeScript** that allows users to manage books, borrow requests, and track availability in a library system.

---

## 🚀 Live Server

🔗 **Live Link:** [https://your-deployment-link.com](https://your-deployment-link.com)

---

## 📽 Video Explanation

📺 **Watch Video:** [YouTube / Drive Link](https://your-video-link.com)

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Language:** TypeScript


---

## 📁 Folder Structure

```
src/
│
├── app/
│   ├── controller/       // All route controllers
│   ├── model/            // Mongoose models
│   ├── routes/           // Express routers
│   ├── middleware/       // Error handling, validation
        
│
├── config/               // Database connection
├── server.ts            // App entry point
```

---

## ⚙️ Features

✅ Add new books to the library  
✅ Get a list of all books  
✅ Get a specific book by ID  
✅ Borrow a book with quantity and due date  
✅ Track available copies  
✅ Proper validation & error handling  
✅ Custom model methods/hooks (where required)  
✅ Organized code with TypeScript interface

---

## 📦 API Endpoints

### 🔹 Books

| Method | Endpoint                  | Description            |
|--------|----------------           |------------------------|
| GET    | `/api/books`              | Get all books          |
| GET    | `/api/books/:id`          | Get book by ID         |
| POST   | `/api/books/create-book`  | Add a new book         |
| PUT    | `/api/books/:id`          | Update a book          |
| DELETE | `/api/books/:id`          | Delete a book          |

### 🔹 Borrow

| Method | Endpoint        | Description             |
|--------|-----------------|-------------------------|
| GET    | `/borrow`       | Get all borrow records  |
| POST   | `/borrow`       | Borrow a book           |

---

## 🧪 Validation

- Book `genre` must be one of: `FICTION`, `NON_FICTION`, `SCIENCE`, `HISTORY`, `BIOGRAPHY`, `FANTASY`.
- ISBN must be unique
- Borrow quantity must not exceed available copies

---

## ❌ Error Handling

- `400 Bad Request`: Invalid input
- `404 Not Found`: Book or resource not found
- `500 Internal Server Error`: Server-side issues

---

## ▶️ How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/B5A3.git
cd B5A3
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment
Create a `.env` file in the root:
```
PORT=5000
DATABASE_URL=your_mongodb_uri
```

### 4️⃣ Run the Project
```bash
npm run dev
```

---

## ✅ Sample Book Data

```json
{
  "title": "Sapiens",
  "author": "Yuval Noah Harari",
  "genre": "NON_FICTION",
  "isbn": "9780062316110",
  "description": "Explores the history of Homo sapiens.",
  "copies": 10,
  "available": true
}
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author

Developed by **Rakibul Hasan**  
📧 Email: rakibulhasan3929@gmail.com  
🌐 Portfolio: https://your-portfolio.com
