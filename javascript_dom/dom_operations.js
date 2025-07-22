/*  @@@@@@@@@@@@@@@@@@   THE HTML DOMS  @@@@@@@@@@@@@@@@ 

    The DOM Programming Interface
    
    // The HTML DOM can be accessed with JavaScript (and with other programming languages).

    // In the DOM, all HTML elements are defined as objects.

    // The programming interface is the properties and methods of each object.

    // A property is a value that you can get or set (like changing the content of an HTML element).

    // A method is an action you can do (like add or deleting an HTML element).

*/

// %%%%%%%  Action Methods on Elements   %%%%%%%%%

// The getElementById Method (	Find an element by element id ) => this method is used to get value of perticular id related element => action on element via id (id is attribute)
// The getElementByClassName Method ( Find elements by class name )=> this method is used to get value of related class elements it may be single or multiple => action on element via class name (class is attribute)
// The getElementByName Method ( Find elements by tag name )=> this method is used to get value of related tag name elements it may be single or multiple => action on element via name (name is attribute)

// %%%%%%% innerHTML Property   %%%%%%%%%%

// The innerHTML property is useful for getting or replacing the content of HTML elements.

// Changing HTML Elements
//          Property	                                    Description
//      element.innerHTML =  new html content	    Change the inner HTML of an element
//      element.attribute = new value	            Change the attribute value of an HTML element
//      element.style.property = new style	        Change the style of an HTML element

//              Method	                                    Description
//      element.setAttribute(attribute, value)  	Change the attribute value of an HTML element

//      $$$$$$$$$$$$$      Adding and Deleting Elements   $$$$$$$$$$$$$$$$$$

//              Method	                                    Description

//      document.createElement(element)	            Create an HTML element
//      document.removeChild(element)	            Remove an HTML element
//      document.appendChild(element)	            Add an HTML element
//      document.replaceChild(new, old)	            Replace an HTML element
//      document.write(text)	                    Write into the HTML output stream


//   @@@@@@@@@@  HTML Elements  @@@@@@@@@@@

// Finding HTML elements by id => document.getElementsById("roll_no")
// Finding HTML elements by tag name => document.getElementsByTagName("p")
// Finding HTML elements by class name => document.getElementsByClassName("economics")
// Finding HTML elements by CSS selectors => document.querySelectorAll("proll_no")
            // tag = <p>
            // document.querySelectorAll("p.intro");           // All elements with class 'intro'
            // document.querySelectorAll("p#main");            // Element with id 'main'
            // document.querySelectorAll("div > p");          // All <p> elements that are direct children of <div>
            // document.querySelectorAll("ul li:first-child"); // First <li> of each <ul>
            // document.querySelectorAll("input[type='text']"); // All text input fields

// Finding HTML elements by HTML object collections
    // The document.forms["..."] syntax only works with:
    // form name
    // form ID (without #)
    // numerical index (e.g. document.forms[0])
    // suppose a form have id like <form id="form1" action="">
        // then we access its property via creating form object with form nam, form id and numarical index.
        // for example =>
            /*
                const form_element = document.form["form1"];// name and id  both working with same process 
                let text = "";
                for(let element of form_elements)
                {   if(element.type !== "submit")
                    {
                        text += element.value + "<br>";
                    }
                }
            */
    // various types of objects here..we have mentiond some are :-
        // document.anchors // for anchor element
        // document.body    for html body
        // document.documentElement //for html body elements
        // document.embeds // for used embed tags properties and attributes 
        // document.forms // for forms property and values
        // document.head  // for document head section waht is include in head tag
        // document.images // for image property
        // document.links // for links like count length of all links in document
        // document.scripts // for script tag like count the length of all script tags in document
        // document.title // for get all informaton or properties of title tag of document.
    
    // @@@@@@@@@   Data Validation   @@@@@@@@@@
    // Data validation is the process of ensuring that user input is clean, correct, and useful.

    // Typical validation tasks are:

    // has the user filled in all required fields?
    // has the user entered a valid date?
    // has the user entered text in a numeric field?
    // Most often, the purpose of data validation is to ensure correct user input.

    // Validation can be defined by many different methods, and deployed in many different ways.

    // Server side validation is performed by a web server, after input has been sent to the server.

    // Client side validation is performed by a web browser, before input is sent to a web server.

    // HTML Constraint Validation
    // HTML5 introduced a new HTML validation concept called constraint validation.

    // HTML constraint validation is based on:

    // Constraint validation HTML Input Attributes
    // Constraint validation CSS Pseudo Selectors
    // Constraint validation DOM Properties and Methods
    // Constraint Validation HTML Input Attributes
    // Attribute	Description
    // disabled	Specifies that the input element should be disabled
    // max	Specifies the maximum value of an input element
    // min	Specifies the minimum value of an input element
    // pattern	Specifies the value pattern of an input element
    // required	Specifies that the input field requires an element
    // type 	Specifies the type of an input element
    // For a full list, go to HTML Input Attributes.

    // Constraint Validation CSS Pseudo Selectors
    // Selector	Description
    // :disabled	Selects input elements with the "disabled" attribute specified
    // :invalid	Selects input elements with invalid values
    // :optional	Selects input elements with no "required" attribute specified
    // :required	Selects input elements with the "required" attribute specified
    // :valid	Selects input elements with valid values

//   @@@@@@@@@@@@@@  JavaScript HTML DOM - Changing CSS  @@@@@@@@@@@@@@ 

// syntax :-> document.getElementById(id).style.property = new style  => document.getElementById(id).style.color = "red"
//   @@@@@@@@@@@@@@@  JavaScript HTML DOM Events   @@@@@@@@@@@@@@@@@@@@@

// 🔹 Mouse Events:
onclick

ondblclick

onmouseover

onmouseout

onmousedown

onmouseup

onmousemove

oncontextmenu

// 🔹 Keyboard Events:
onkeydown

onkeyup

onkeypress

// 🔹 Form Events:
onsubmit

onchange

oninput

onfocus

onblur

onreset

// 🔹 Window Events:
onload

onunload

onresize

onscroll

onbeforeunload

// 🔹 Clipboard Events:
oncopy

oncut

onpaste

// 🔹 Touch Events (Mobile):
ontouchstart

ontouchmove

ontouchend

//    @@@@@@@@@@@@    JavaScript HTML DOM EventListener   @@@@@@@@@@@@@

// The addEventListener() method is used to attach an event to an object.
// When that event occurs, it runs a specified function as per the requirement.
// syntax :-> element.addEventListener(event, function, useCapture);
        // The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
        // The second parameter is the function we want to call when the event occurs.
        // The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

// Note that you don't use the "on" prefix for the event; use "click" instead of "onclick".
   
/* for Example :-> 
 document.getElementById("myBtn").addEventListener("click", function() {
                                                          alert("Button clicked!");
                                                              });
   another example =>
     let doms  = document.getElementById("myBtn");
   doms.addEventListener("click", function() { alert("Button clicked!"); });
 */

//  The addEventListener() method allows you to add many events to the same element, without overwriting existing events

// The removeEventListener() method
// The removeEventListener() method removes event handlers that have been attached with the addEventListener() method:
// This removes the event effect from the object.
// For example, if a 'mousemove' event is applied to an object,
// using removeEventListener() will stop the mousemove effect immediately.


// @@@@@@@@@@@@     JavaScript HTML DOM Navigation    @@@@@@@@@@@@@@@@

// in a HTML Document or DOM everything is node..in simple words the every part of a HTML document is HTML Nodes
// like <p>, <a>, <span>, <div> etc these are tag Nodes
// <p> tag → Element Node
// id="para1" → Attribute Node
// <p>Hello World!</p> Hello World! → Text Node    
// <!-- ye comment hai --> → Comment Node

/* Structure of DOM Nodes
    # Document (root)
    |
    └── html (Element Node)
        |
        ├── head (Element Node)
        |
        └── body (Element Node)
            |
            ├── h1 (Element Node)
            |    └── "Hello" (Text Node)
            |
            └── p (Element Node)
                └── "This is a paragraph." (Text Node)
*/

/* Now in below i explain the Nodes and its Relationships with other nodes.

    ### From the HTML above you can read: ###

    // <html> is the root node and Parent Node and it has no parents.
    // <html> is the parent of <head> and <body>
    // <head> is the first child of <html>
    // <body> is the last child of <html>
   
    // @@@@@  and: @@@@@

    // <head> has one child: <title>
    // <title> has one child (a text node): "DOM Tutorial"
    // <body> has two children: <h1> and <p>
    // <h1> has one child: "DOM Lesson one"
    // <p> has one child: "Hello world!"
    // <h1> and <p> are siblings
    // Example: <body> has two children — <h1> and <p>
    // But in general, <body> can contain many types of elements like:
    // <div>, <span>, <a>, <embed>, <img>, <input>, <textarea>, <strong>, <b>, etc. these are not children of body. these represent what kind of element is allowd in html document.

*/


