# blog-website
This is a Web Application written using Node.JS, Express.js, PostgreSQL for blog posting!
![Screenshot from 2024-02-11 15-44-50](https://github.com/pinkozz/blog-website/assets/136079534/0f0877a5-4434-48df-97b5-47a6418ae372)
![Screenshot from 2024-02-11 15-45-00](https://github.com/pinkozz/blog-website/assets/136079534/e8a22923-2fb8-4430-b6b6-6e0cfee6c47e)
![Screenshot from 2024-02-11 15-45-08](https://github.com/pinkozz/blog-website/assets/136079534/bb553e0e-9c87-4c75-a14d-9a9ec30274c4)

# Table of contents
• [Features](https://github.com/pinkozz/blog-website#features)

• [Installation](https://github.com/pinkozz/blog-website#installation)

• [Usage](https://github.com/pinkozz/blog-website#usage)

• [Contributing](https://github.com/pinkozz/blog-website#contributing)

• [License](https://github.com/pinkozz/blog-website#license)

# Features
• User friendly interactions through a Web Browser

• Post Creation: Users are able to create new posts.

• Post Viewing: The home page allows the user to view all their posts.

• Post Update/Delete: Users are able to edit and delete posts as needed.

• Easy-to-use and extandable codebase

# Installation
*!! To run this application successfully, you must have Node.JS and PostgreSQL installed on your local machine !!*

1. Clone this repository to your local machine using this command:
   
   ```shell
   git clone https://github.com/pinkozz/blog-website
   ```
2. Navigate to project folder:
   
   ```shell
   cd blog-website
   ```
3. Once you have installed the application, install all needed packages by simply running this line in your console:
   
   ```shell
   npm i
   ```

4. Create the "blog" PostgreSQL database.

5. Open index.js and change following lines of code so the configuration matches your actual database settings
   ```code
   const db = new pg.Client({
     user: "postgres",
     host: "localhost",
     database: "blog",
     password: "postgres",
     port: 5432,
   });
   ```
6. Run the query from create_table.sql in your PostgreSQL environment

7. Run the application:

   ```shell
   node index.js
   ```

# Usage
Once the Web App is up and running, users can interact with it through preferred Web Browser. The Blog Website allows user to view posts, add new, delete and edit existing ones! 

# Contributing
Contributions to the Blog Website are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make your changes and commit them with descriptive commit messages.
5. Push your changes to your forked repository.
6. Submit a pull request to the main repository.

Please ensure that your contributions align with the project's coding style, guidelines, and licensing.
