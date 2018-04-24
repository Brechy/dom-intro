window.onload = function() {
  console.log("JavaScript is alive!");

  document.getElementById('greeting').innerHTML = "Hello World!";
  document.getElementById('essentials').style.backgroundColor = 'yellow';

  let picture = document.createElement('img');
  picture.setAttribute("src", "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
  document.getElementById('greeting').appendChild(picture);

  document.getElementById('essentials').addEventListener("click").className = 'selected';

  // var items = document.getElementById("essentials");
  // for (var i = 0; i < items.length; i++) {
  //    function() {
  //     //when clicked, add class select
  //     //does this remove class select on second click?
    });
  }

}
