# Builder-Tools-Project-Backend: [Live Link](https://ph-assignment-12-bulder-tools-serverside.onrender.com)

## Project Installation In Local Server:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Rename `.env.example` to `.env`.
4. Run the server using `npm run start:dev`.

## Configuration:

- Environment Variables:
  - `PORT`: Port number the server listens on. Default: 8080
  - `DB_USER`: User for MongoDB database.
  - `DB_PASS`: Password for MongoDB database.

## Usage:

- **API Endpoints:**

  - **POST** `/api/v1/user`

        - **Description:** Create a new user.
        - **Request Body:**

          ```json
          {
            "userId": "123456",
            "userName": "john12",
            "firstName": "John",
            "middleName": "A.",
            "lastName": "Doe",
            "email": "john.doe@example0.com",
            "phone": "1234567890",
            "gender": "male"
          }
          ```

        - **Response Body:**

        ```json
          {
            "_id": "6763ec4b9123083d9ecf8202",
        "userId": "123456",
        "userName": "john12",
        "firstName": "John",
        "middleName": "A.",
        "lastName": "Doe",
        "email": "john.doe@example0.com",
        "phone": "1234567890",
        "gender": "male",
        "createdAt": "2024-12-19T09:50:03.422Z",
        "updatedAt": "2024-12-19T09:50:03.422Z"
          }
          ```

  - **GET** `/api/v1/user`

    - **Description:** Get all users.

## Dependencies:

- `cors`: Express middleware for enabling CORS with frontend.
- `dotenv`: Loads environment variables from .env file.
- `express`: Web framework for Node.js.
- `mongodb`: MongoDB driver for Node.js.
- `nodemon`: Utility for automatically restarting the server during development.

### Before Pushing Your Code into Github:

1. Before pushing your code to the remote repository, ensure that you have run the following command in your terminal (Git Bash):

   ```bash
   rm -rf .git
   ```
