# Chitkara Campus Hiring - BFHL API (Node.js)

This project implements the **Chitkara Campus Hiring Full Stack API Round** challenge.  
It provides a REST API endpoint `/bfhl` that accepts a JSON POST request with an array of strings and returns categorized elements such as even numbers, odd numbers, alphabets, special characters, sum of numbers, and a custom concatenated string of alphabets.

---

## Features

- POST `/bfhl` endpoint that processes input data array.
- Classifies input strings into:
  - Even numbers (as strings)
  - Odd numbers (as strings)
  - Alphabets (converted to uppercase)
  - Special characters
- Calculates the sum of numeric values (returned as a string).
- Creates a concatenation string by reversing all alpha characters and applying alternating caps.
- Returns static user information (user_id, email, roll number).
- Gracefully handles invalid input with proper error responses.

---

## API Specification

- **Route:** `/bfhl`
- **Method:** POST
- **Content-Type:** `application/json`
- **Request Body:**

---

## Getting Started

### Prerequisites

- Node.js v14 or above
- npm (Node Package Manager)

### Installation

1. Clone the repository:
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

text

2. Install dependencies:
npm install

text

### Running Locally

Start the server:
npm start

text

The API will be accessible at `http://localhost:8000/bfhl`.
