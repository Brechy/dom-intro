window.onload = function() {
  console.log("JavaScript is alive!");


//1Change greeting to "Hello World"
  let greetingElement = document.getElementById('greeting');
    greetingElement.innerHTML = "Hello World!";

//2Set background color of <li> tags to yellow.
  let allListItems = document.querySelectorAll("li");              allListItems.forEach((listItem)=>{
    listItem.style.backgroundColor = "yellow";
    listItem.addEventListener("click", buttonClick);

  });
//3Create Image tad and insert image of Ralph.
  let picture = document.createElement("img")
  picture.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
  greetingElement.appendChild(picture);

  //4Add the class of `selected` to an `<li>` when it is clicked. Remove it from any other `li`s as well.
  function buttonClick(event) {
    let element = document.querySelector('selected');
      if(element) {
        element.className = "";
      }
    this.className = "selected";
  //5Change the image to be the most recently clicked food item.
  document.querySelectorAll("img")[1].src = "./images/"+this.innerHTML+".jpeg"
  }
//6When the gray div is moused over, it's removed from the DOM.
let disappearBox = document.querySelector("#ghosting");
disappearBox.addEventListener("mouseover", function() {
  return this.remove();
  });
//7When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.
let doubleBox = document.querySelector("#resize");
  doubleBox.addEventListener("mouseenter", function() {
  this.style.width = "400px";
  });
//commented out following, redundent code.
// document.querySelector("#resize");
  doubleBox.addEventListener("mouseleave", function() {
  this.style.width = "200px";
  });
  //8When the reset button is clicked - remove the `selected` class from each `<li>` and change the image to `panic.jpeg`.
  document.querySelectorAll("#reset");
  document.addEventListener("click", function() {
    let clickedReset = document.querySelector(".selected");
    if(clickedReset) {
      clickedReset.className = "";
      clickedReset.className = "selected";
      console.log(clickedReset);
    }
    document.querySelectorAll("img")[1].setAttribute("src", "./images/panic.jpeg");

    //Something in the above code is overriding the code on line 28. This needs to be fixed. Should still change food pics when <li> items are clicked. 
  });

}

  //
  //
  //
  //
  //9When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I H8 NUMBERZZZ!"
  //
  //BONUS: If someone types the [Konami Code](https://en.wikipedia.org/wiki/Konami_Code), the page alerts "YOU ARE AN EVENT HANDLER GURUUUUUUUUU!"
