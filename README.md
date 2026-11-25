# Student Management System

A full-stack web application developed to manage student records efficiently. The application allows users to add, view, update, and delete student information.

## Technologies Used

**Frontend:**
- React.js
- Vite
- HTML
- CSS
- JavaScript

**Backend:**
- Python
- Django
- Django REST Framework

**Database:**
- PostgreSQL

## Features

- Add new student records
- View all student records
- Update student information
- Delete student records
- REST API integration
- PostgreSQL database connectivity
- Responsive user interface

## Project Structure

```text
Student-Management-System/
│
├── config/
├── students/
├── frontend/
├── .env.example
├── .gitignore
├── manage.py
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/ajagadale808-bit/Student-Management-System.git
cd Student-Management-System
```

### 2. Create and activate virtual environment

```bash
python -m venv venv
```

Windows Command Prompt:

```cmd
venv\Scripts\activate
```

### 3. Install backend dependencies

```bash
pip install django djangorestframework psycopg[binary] django-cors-headers python-dotenv
```

### 4. Configure environment variables

Create a `.env` file in the project root using `.env.example` as a reference.

Add your Django secret key and PostgreSQL password.

### 5. Configure PostgreSQL

Create a PostgreSQL database named:

```text
student_management_db
```

Update the database settings in the `.env` file if required.

### 6. Apply migrations and start Django server

```bash
python manage.py migrate
python manage.py runserver
```

Backend URL: http://127.0.0.1:8000/

API URL: http://127.0.0.1:8000/api/students/

### 7. Start React frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend URL: http://localhost:5173/

## Project Status

The Student Management System includes a React frontend, Django REST API backend, and PostgreSQL database integration with CRUD functionality.

## Author

Aishwarya Hanmant Jagadale