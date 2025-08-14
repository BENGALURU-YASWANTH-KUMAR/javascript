//DOM =DOCUMENT OBJECT MODEL
// object() that represents the page you see in the web browser
// and provides you with an api to interact with it
// web browser constructs the dom when it loads an html document,
// and structures all the elements in a tree-like representation
// javascript can access the dom to dynamically
// change the content,structure,and style of a web page.

// document.title="My website";
// console.log(document);
// console.dir(document);
// document.body.style.backgroundColor=black;
const username=window.prompt("enter username");
const welcomeMsg=document.getElementById("welcome-msg");
welcomeMsg.textContent+=username===""?'Guest':" " +username;
//document.getElementById();
