# FE_App_Scores
Backend Link: https://github.com/DragoiAnca0404/BE_App_Scores

# Sports Score Management App

## Short Description

The **Sports Score Management App** is a platform to manage sports scores for teams, players, and matches. It offers two user roles—**Admin** and **User**—with distinct features. Admins can add new scores, create teams, manage users, and oversee match activities, while users can view scores, matches, and personal activities. The app ensures secure authentication and role-based authorization using Bearer tokens, with key modules like login, registration, password reset, score viewing, and team creation. It’s an efficient solution for managing live or historical sports data with real-time updates and ease of access.

## Key Features

- For login, registration, password resets, and two-factor authentication with email code delivery, I used **Microsoft Identity**.
- After successful authentication, the token is returned and stored in local storage.
- I used Bearer authentication on the front end regarding authorization based on the role (Admin, User).
- Users can choose a sport and view matches, with each match displaying the scores.
- Admins have editing options for managing data.

## Technologies
- **SSMS** (SQL Server Management Studio)
- **Ionic** (Angular)
- **ASP.NET Core API**

## Modules of Sports Score Management App

### 1. Login Module (Admin & User Side)
- **Admin Features:**
  - Admin login with role-based authentication.
  - Secure token generation (Bearer/JWT).
  
- **User Features:**
  - User login functionality with credentials.
  - Token-based session management.

### 2. Register Module (Admin & User Side)
- **Admin Features:**
  - Admin can register new users manually (if needed).
  - View and manage user roles during registration.

- **User Features:**
  - User registration with basic information (e.g., username, email, password).
  - Email verification.

### 3. Reset Password Module (Admin & User Side)
- **User Features:**
  - Users can request password resets via email.
  - Update password via reset link or token.

### 4. View Scores Module (Admin & User Side)
- **Admin Features:**
  - View scores of all matches.
  - Modify or update scores if necessary.

- **User Features:**
  - View scores of all matches.

### 5. View Activities Module (Admin & User Side)
- **Admin & User Features:**
  - Track and view user activity (e.g., scores added, teams created).

### 6. View Matches Module (Admin & User Side)
- **Admin Features:**
  - Admin can edit or delete match details.

- **User Features:**
  - Users can view a list of upcoming, ongoing, and past matches.

### 7. Add New Score Module (Admin Side)
- **Admin Features:**
  - Admin can input or update scores for ongoing or past matches.
  - Associate scores with specific teams and match details.

### 8. Create New Team Module (Admin Side)
- **Admin Features:**
  - Admin can create a new team by entering team details (name, players, coach, etc.).
  - Manage team information and assign players or roles.

# Match Structure

A match is a fundamental entity within the **Sports Score Management App** and is characterized by the following unique identifiers and attributes:

## Unique Identifiers
- **Match Date:** The scheduled date and time when the match takes place.
- **Match Name:** A descriptive title for the match, which may include team names or event identifiers.

## Teams
- Each match must include at least **two teams**. There is no upper limit on the number of teams that can participate in a match.
- Each team is assigned a **unique identifier** (e.g., team name or ID).

## Scores
- Each team participating in the match will have an associated **score**.
- Scores are recorded and updated as the match progresses, allowing for real-time tracking of performance.

## Example Structure

### Match Example:
- **Match Date:** October 12, 2024, 3:00 PM
- **Match Name:** "Team A vs. Team B - Championship Final"

### Teams:
- **Team 1:** Team A
  - **Score:** 2
- **Team 2:** Team B
  - **Score:** 3

## Summary
In summary, each match in the **Sports Score Management App** is uniquely identified by its date and name and must include a minimum of two teams, each with an assigned score. This structure allows for comprehensive tracking and management of sports events, facilitating better engagement and data analysis for users.




<img src="https://github.com/user-attachments/assets/fa3549fd-76a8-4e23-a75a-3bc72b2a49ae" alt="WhatsApp Image 2024-10-12 at 16 20 38" width="400"/>

<img src="https://github.com/user-attachments/assets/1fbf7fed-24e0-43c2-a8ed-e1e205ad1d98" alt="WhatsApp Image 2024-10-12 at 16 20 38 (1)" width="400"/>




<img src="https://github.com/user-attachments/assets/57e5b6b7-124f-4056-8d83-ac90bbec62a3" alt="WhatsApp Image 2024-10-12 at 16 03 20" width="400"/>

<img src="https://github.com/user-attachments/assets/db27f6fd-4e41-4d4f-a092-5286d9b02656" alt="WhatsApp Image 2024-10-12 at 16 26 36 (2)" width="400"/>

<br/>


<img src="https://github.com/user-attachments/assets/e1c0a4a9-af06-43b6-b967-3c9e21381bf8" alt="WhatsApp Image 2024-10-12 at 16 03 20 (1)" width="350"/>

<br/>

<img src="https://github.com/user-attachments/assets/b1fa26d1-c798-41d3-be5a-1863440cf90c" alt="WhatsApp Image 2024-10-12 at 16 36 01 (2)" width="400"/>

<img src="https://github.com/user-attachments/assets/a427b1b4-9990-4981-b5a6-b42cfe11c3be" alt="WhatsApp Image 2024-10-12 at 16 36 01" width="400"/>

<img src="https://github.com/user-attachments/assets/6898d10f-42f8-47d7-b00a-be63997dcbf0" alt="WhatsApp Image 2024-10-12 at 16 36 01 (1)" width="400"/>

![WhatsApp Image 2024-10-12 at 16 36 01 (3)](https://github.com/user-attachments/assets/81fe3c15-5c71-4b92-96bd-33e0363950c0)

![Screenshot 2024-10-12 163026](https://github.com/user-attachments/assets/379fe26a-86be-455b-86f7-518ce3572e4d)

![WhatsApp Image 2024-10-12 at 16 26 36 (1)](https://github.com/user-attachments/assets/7a897e4f-96da-40c8-9a91-a9ef5b0bb162)

![WhatsApp Image 2024-10-13 at 12 03 13](https://github.com/user-attachments/assets/49cc3d1d-3639-421b-b4a7-dc5cbdf93c91)
![WhatsApp Image 2024-10-13 at 12 03 14](https://github.com/user-attachments/assets/73f463a5-cd42-4647-9277-1495ece799c0)
![WhatsApp Image 2024-10-13 at 12 03 14 (1)](https://github.com/user-attachments/assets/6ddd2c10-2c5d-42f1-9024-11955e4c089e)




https://github.com/user-attachments/assets/6991ba64-a078-408b-84ba-a092fe2534c1



