----------------------------------------------------------------------------------------------------------------------------------------

Create a user interface where the user can input two values (2 input elements) and the select type of mathematical operation. When the submit (`=` button) is clicked, capture this input, bundle it up in an object, and send this object to the server via a POST. There should also be a 'C' button that will clear the user input fields.

----------------------------------------------------------------------------------------------------------------------------------------
LAYING OUT STEPS TO COMPLETE THIS ASSIGNMENT
HTML
- 2 input elements [] [];
- button '=' to take the values from input elements, bundles it up in an object, send object to server via POST
- button 'C that will clear user input fields

JQUERY
- grab input element by ids and put a click handler on it
- create function to take input elements
    - store into an object
    - send object to server via post (ajax POST)
- 



----------------------------------------------------------------------------------------------------------------------------------------
Build out the server-side logic to compute the numbers as appropriate. The server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, send back the OK. You should do a GET request after the POST to get the actual calculation.

----------------------------------------------------------------------------------------------------------------------------------------
