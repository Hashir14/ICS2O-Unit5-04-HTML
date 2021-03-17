document.getElementById('pic').addEventListener('click', image)
document.getElementById('apology').addEventListener('click', puns)
document.getElementById('majic').addEventListener('click',carGone)
document.getElementById('majic2').addEventListener('click', carBack)
document.getElementById('back').addEventListener('click', backDrop)
/* The commands above grab the button elements with the specified ids from the HTML file. The event listener prepares to apply functions to that button but it will wait until the button has been clicked. */

function image () {
  document.getElementById('dog').src = 'images/cat.jpeg'
  document.getElementById('changeText').innerHTML = 'I guess not. I figured you were more of a cat person'
}
/* The lines of code above tell the corresponding event listeners to apply the functions in the curly brackets once the button has been clicked. In this case, the code is telling the dog image to change into a cat image and for some text to appear under it when the button is clicked. */

function puns () {
  document.getElementById('dog').src = 'images/dog.jpeg'
  document.getElementById('changeText').innerHTML = 'Sorry about that. I was just <i>kitten</i> around. But I guess that comment was a little <i>ruff</i>. All puns intended.'
}
/* This command tells the dog image to come back and changes the text under the image to what is written in those curly brackets after the innerHTML. */

function carGone () {
  document.getElementById('car').style.display = 'none'
}
/* This command tells the car image to not show itself on the page when the corresponding button is clicked. display = none means the image will have no display. */

function carBack () {
  document.getElementById('car').style.display = 'block'
}
/* This line will make the car image re-appear by giving it a display again when the corresponding button is clicked. "Block" means that the image will have its own line when it re-appears. */

function backDrop () {
  document.body.style.backgroundColor = 'lightblue'
}
/* This line changes the background color of the webpage by applying a background color function directly to the body of the HTML file. */
