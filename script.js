let myDiv = document.getElementById("result");

function myWidth() {
  // get input of width or height
  let myWidth = document.getElementById("my-width");
  let myHeight = document.getElementById("my-height");
  // get width input and output the value to a paragraph
  document.getElementById("width-value").innerHTML =
    "The width is: " + myWidth.value + "px";
  // get result div
  let myDiv = document.getElementById("result");
  // set width width and height of the div
  myDiv.setAttribute(
    "style",
    "width: " +
      myWidth.value +
      "px" +
      "; " +
      "height: " +
      myHeight.value +
      "px" +
      ";"
  );
}

function myHeight() {
  let myHeight = document.getElementById("my-height");
  let myWidth = document.getElementById("my-width");

  document.getElementById("height-value").innerHTML =
    "The height is: " + myHeight.value + "px";

  let myDiv = document.getElementById("result");
  myDiv.setAttribute(
    "style",
    "width: " +
      myWidth.value +
      "px" +
      "; " +
      "height: " +
      myHeight.value +
      "px" +
      ";"
  );
}
