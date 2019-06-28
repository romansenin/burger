# burger
`Add different burgers to a list of burgers to eat`
___

## Deployed Version
Click [here](https://burger-handlebars-app1.herokuapp.com/).

## Setup on Local Machine

To set up and use the app:
  1. Download/Clone the repository and navigate to it.
  1. Open the `config/connection.js` file in a text editor and locate the following block of code starting at line 10:
      ```javascript
      connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
      });
      ```
      Replace "root" in the line
      ```javascript
      password: "root",
      ```
      with your MYSQL password.
  1. Start your MYSQL Server.
  1. Run the `db/schema.sql` file to fill the database with some example burgers (CAUTION: make sure `burgers_db` isn't a database already in use and/or required on your machine).
  1. From the `burger` directory run these two commands within your terminal:
      ```bash
      npm install
      npm start
      ```
  1. Visit http://localhost:3000 in your browser.

---
### Technologies Used:
* Node.js
* Express.js
* Handlebars.js
* CSS/Bootstrap
* MySQL


