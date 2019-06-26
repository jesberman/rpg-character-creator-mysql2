# RPG Character Creator

Functioning fullstack application with both front-end and back-end components.  Built using HTML, CSS, JavaScript, Node.js, MySQL, and Express.  

After launching the application using Node.js and traveling to the specified port, a GET route on the Express server is activated that sends to the user the data contained within a MySQL database.  This information is then displayed on the front-end, creating a listing of various RPG characters created by previous users.  Associated information includes each character's name, class, and health.

The user can then enter a new character of their own.  By filling out the requested information within the form field and clicking enter, a POST route is activated that uploads the user's info into the database.  Once this is done, the page is automatically refreshed, the GET route is activated again, and the page reappears with the new information in the table.

You can view a video demonstration of how the application works at the following link:

https://www.youtube.com/watch?v=VJqh5imJUiA&feature=youtu.be