

# Student Management System

A full-stack web application developed to manage student records. It allows users to add, view, update, and delete student information.

## Technologies Used

- **Frontend:** React.js, Vite, CSS
- **Backend:** Python, Django, Django REST Framework
- **Database:** PostgreSQL

## Features

- Add new student records
- View all student records
- Update student details
- Delete student records
- Store student data in PostgreSQL
- Responsive user interface
- REST API integration between frontend and backend

## Project Structure

```text
Student-Management-System/
│
├── config/
├── students/
├── frontend/
├── venv/
├── manage.py
└── README.md
```

## Installation and Setup

### 1. Clone the project

```bash
git clone <your-github-repository-link>
```

### 2. Backend Setup

```bash
python -m venv venv
venv\Scripts\activate
python -m pip install django djangorestframework psycopg[binary] django-cors-headers
python manage.py migrate
python manage.py runserver
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Application URLs

- Frontend: http://localhost:5173/
- Backend API: http://127.0.0.1:8000/api/students/

## Project Status

Completed – CRUD operations are implemented and tested.

