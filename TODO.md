-------------------------------------------------

Create a user interface where the user can input two values (2 input elements) and the select type of mathematical operation. When the submit (`=` button) is clicked, capture this input, bundle it up in an object, and send this object to the server via a POST. There should also be a 'C' button that will clear the user input fields.

-------------------------------------------------
LAYING OUT STEPS TO COMPLETE THIS ASSIGNMENT

HTML
[x] 2 input elements [] [];
[x] 4 mathematical calculation button
[x] button '=' to take the values from input elements, 
[x] bundles it up in an object
[x] send object to server via POST
[x] button 'C' that will clear user input fields


JQUERY
[x] grab input element by IDs and put click handlers on them
[x] create function to take input elements
    [x] store into an object
    [x] send object to server via post (ajax POST)
[x] grab all mathematical buttons and put into a function
[x] 






- Build out the server-side logic to compute the numbers as - appropriate. 
- The server should be able to handle Addition, Subtraction, Multiplication, and Division. 
- Once the calculation is complete, send back the OK. 
- You should do a GET request after the POST to get the actual calculation.

History
[x] Keep a historical record of all math operations and - solutions on the server. Display a list of all previous calculations on the page when it loads using a GET request. Update the list when a new calculation is made.
    [x] - clear inputs of input fields
    [x] - 

NOTE: 
-History should exist even after refreshing the page. It's expected that the history will go away after restarting the server. 
[] append values to DOM
[] 


-------------------------------------------------