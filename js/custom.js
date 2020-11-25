/*console.log(" Hello World! ")

var images = document.getElementsByTagName('img');
console.log(images);

var anchors = document.getElementsByTagName('a');
console.log(anchors);

var phrase = document.getElementsByTagName('p');
console.log(phrase);

var heading = document.getElementById('heading');
console.log(heading);
console.log(heading.innerHTML);
console.log(heading.nodeType);*/


/*CONTENT CENTER ALIGN*/ 

/*var main_content = document.getElementById('main-content');
main_content.setAttribute('align', 'center');

var heading= document.getElementById('heading');
heading.innerHTML= " Welcome to Jad House !";//VERY IMPORTANT !*//*

-----------------------------------------------------------

var main_content = document.getElementById('main_content');

var new_heading = document.createElement('h2');
var new_phrase = document.createElement('p');

new_heading.innerHTML = " Welcome to Jad House !";
new_phrase.innerHTML = " This is a simple phrase just to show a demo. ";

main_content.appendChild(new_heading);
main_content.appendChild(new_phrase);

-----------------------------------------------------------
var btn = document.getElementById('myBtn');
btn.onclick = function()
{
    alert('Hello world ! ');
    alert('Bye World ! ');
};*/
/*
------------------------------------------------
function runMe()
{
    alert('Simple message');
}
setTimeout(runMe, 1000);

function runMe()
{
    console.log( 'Hello' );
}

setInterval (runMe, 1000);*/


