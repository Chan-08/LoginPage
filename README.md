# Angular Login Verification with JSON Data

## Overview
This project is a simple login authentication system built using Angular. It verifies user credentials from a stored JSON file. Upon successful authentication, the user is redirected to a dynamically generated dashboard that displays their personal details such as name, age, email, and gender.

## Features
- User authentication using JSON data
- Dynamic dashboard creation for each logged-in user
- Responsive UI built with Angular
- Secure routing to prevent unauthorized access

## Technologies Used
- **Angular 17**
- **TypeScript**
- **JSON for user data storage**
- **Angular Routing**

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Chan-08/LoginPage.git
   cd LoginPage
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the application:
   ```sh
   ng serve
   ```
4. Open the application in your browser:

## Project Structure
```
/src
 ├── app
 │   ├── components
 │   │   ├── login
 │   │   │   ├── login.component.ts
 │   │   │   ├── login.component.html
 │   │   │   ├── login.component.css
 │   │   ├── dashboard
 │   │   │   ├── dashboard.component.ts
 │   │   │   ├── dashboard.component.html
 │   │   │   ├── dashboard.component.css
 │   ├── services
 │   │   ├── auth.service.ts
 │   ├── assets
 │   │   ├── users.json
 │   ├── app.config.ts
```

## JSON Data Format
The user credentials and details are stored in a JSON file:
```json
[
  {
    "email": "user@example.com",
    "password": "password123",
    "name": "John Doe",
    "age": 28,
    "gender": "Male"
  }
]
```

## How It Works
1. **Login Page**: Users enter their email and password.
2. **Authentication**: The system checks the JSON file for matching credentials.
3. **Redirect to Dashboard**: If credentials match, the user is redirected to a personalized dashboard displaying their details.
4. **Unauthorized Access Prevention**: Users cannot access the dashboard without authentication.

## Future Enhancements
- Implement session storage for maintaining login state
- Add user registration functionality
- Enhance security with password hashing

## Developer
**Name**: Chandrakumar S,

**Contact**: [chandrakumar.developer@gmail.com](mailto:chandrakumar.developer@gmail.com)

## My Portfolio
https://chandrakumar.vercel.app

## License
This project is open-source and available under the MIT License.




