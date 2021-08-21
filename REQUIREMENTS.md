# Register
  **RF**
    - The user must be able to register with an email, name and password;
    - The user cannot have two accounts with the same email;

  **RNF**

  **RN**
    - The user must use a valid email address;

# Recover Password
  **RF**
    - The user must be able to request an email with a password recover link;
    - The recovery link should expire in 2 hours;

  **RNF**

  **RN**
    - The user must use a valid email address;

# Login
  **RF**
    - The user must be able to log in at any time;

  **RNF**
    - Use JWT for authentication;

  **RN**
    - The user must have an account to login;

# History
  **RF**
    - The user must be able to see a history of every time he login or logout;
    - At each login, a record must be created in the DB with date and time;

  **RNF**
    - Use Redis database;

  **RN**

# Clock List
  **RF**
  - The user must be able to see a history every time he had clockIn or clockOut;

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

# Activation
  **RF**
    - The user must receive an activation email
    - The user must be able to activate his account

  **RNF**

  **RN**
