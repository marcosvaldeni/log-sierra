# Register
  **RF**
    - The user must be able to register with an email, name and password;
    - The user cannot have two accounts with the same email;

  **RNF**

  **RN**
    - The user must use a valid email address;

# Login
  **RF**
    - The user must be able to log in at any time;
    - At each login, a record must be created in the DB with date and time;

  **RNF**
    - Use JWT for authentication;

  **RN**
    - The user must have an account to login;

# Logout
  **RF**
    - The user must be able to log in at any time;
    - At each login, a record must be created in the DB with date and time;

  **RNF**
    - Use Redis database;

  **RN**

# History Panel
  **RF**
    - The user must be able to see a history every time he login or logout;

  **RNF**
    - Use Redis database;

  **RN**

# Log Panel
  **RF**
  - The user must be able to see a history every time he active or dective;

  **RNF**
    - Use Redis database;

  **RN**

# Profile Update
  **RF**
    - The user must be able to update their data;
    - The user must be able to add his github profile address;

  **RNF**

  **RN**
    - The user must be logged in to update their data;
