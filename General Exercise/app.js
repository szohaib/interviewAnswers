//Question 1
// Assess your knowledge level on the following languages (1 = none; 5 = expert):

// Vanilla JS
// jQuery
// HTML/HTML5
// CSS/CSS3
// Ajax
// AngularJS
// Bootstrap

//Answer

// Vanilla JS - 4
// jQuery - 4
// HTML/HTML5 - 5
// CSS/CSS3 - 3
// Ajax - 4
// AngularJS - 4
// Bootstrap - 4



///////////////////

//Question 2
//What is the width of a container with 100px of width and 5px of padding?

// Answer
// 110px

///////////////////

//Question 3
//How to apply a click event to all paragraphs except for the last?

//Answer
$('p').not(':last').on('click', clickEventHandler)

////////////////////

//Question 4

//Why does the alert show "Jack" first and then undefined?

function identity() {
    var name = 'Jack';
    alert(name);
    return
    name
};

var who = identity();
alert(who)

//Answer

//who declares a new instance of the function identity and assigns 'jack' to variable name. Then it alerts the name 'jack'. After that the function encounters a return statement. Since the variable name is on the next line the function returns nothing hence it alerts as undefined.