# Portfolio – Full-Stack Application

A full-stack web application for managing artworks, developed with a strong focus on backend architecture using Java and Spring Boot.


if u wanna check i already deployed:
[millenniumdream.vercel.app](https://millenniumdream.vercel.app/)

WARN: layout may break on some screen resolutions. i'm trying to fix this quick as i can.

---

##  Project Purpose

This project was built to strengthen backend development skills using Java and Spring Boot, applying concepts such as RESTful API design, layered architecture, relational database modeling, and frontend-backend integration via HTTP/JSON.

---

## Technologies Used

### Backend
- Java 24
- Spring Boot
- Spring Data JPA
- PostgreSQL with Flyway Migrations
- RESTful APIs
- Maven

### Frontend
- React
- TypeScript
- Axios
- HTML5 / CSS3

### Tools
- Git & GitHub
- Insomnia
- IntelliJ IDEA

---

##  Backend Architecture

The backend follows a layered architecture pattern:

- **Controller Layer** → Responsible for handling HTTP requests and exposing REST endpoints.
- **Service Layer** → Contains business logic and application rules.
- **Repository Layer** → Handles data persistence using Spring Data JPA.
- **Entity Layer** → Represents database models mapped with JPA annotations.

This structure improves maintainability, separation of concerns, and scalability.

---

## 📡 API Endpoints

| Method | Endpoint   | Description                  |
|--------|-----------|------------------------------|
| GET    | /works    | Retrieve all artworks        |
| GET    | /works/{id} | Retrieve artwork by ID       |
| POST   | /works    | Create new artwork           |
| PUT    | /works/{id} | Update existing artwork      |
| DELETE | /works/{id} | Delete artwork               |

All endpoints exchange data in **JSON format**.

---

## Database

The application uses a **PostgreSQL relational database**.

### Example Entity Structure:

- `id` (Long)
- `title` (String)
- `image` (String)

The project uses **Spring Data JPA** for ORM and database interaction.

---

## Frontend-Backend Integration

The frontend communicates with the backend using:

- HTTP requests
- JSON data exchange
- Axios for API consumption

The UI was designed and implemented using React with TypeScript, focusing on clean component structure and maintainability.

---
