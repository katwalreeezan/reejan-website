var myIndex = 0;
window.onscroll = () => { onScrollNavWidth() }
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1} //reset 
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


function onScrollNavWidth() {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navBar").style.width = "40vw";
    document.getElementById("navBar").style.opacity = "0.6";
  } else {
    document.getElementById("navBar").style.width = "95vw";
    document.getElementById("navBar").style.opacity = "1.0";
  }

  if(document.body.scrollTop > document.getElementById("coverSection").offsetHeight || document.documentElement.scrollTop > document.getElementById("coverSection").offsetHeight) {
    document.getElementById("articleList").style.top = "0px";
  } else {
    document.getElementById("articleList").style.top = (document.getElementById("coverSection").offsetHeight - document.body.scrollTop)+'px';
  }

}


function validateForm() {
  var email=document.forms["contact"]["email"].value;
  var message=document.forms["contact"]["message"].value;

  if ((email == '') || (message=='')) {
    alert('Oops! Incomplete form');
  } else {
    alert('Thank you for your feedback :)');
  }

}