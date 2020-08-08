//esversion:6

const data = [1, 2, 3, 4, 5];
const element = ".chart-area";
const options = [800, 600];

function drawBarChart(data, options, element) {
  console.log("hello");
  //going through drawing an element per data in data array
  for(i=0; i<data.length; i++){
    //appending something per action
    $(element).append("<p class='bar'>Hello</p>");
  }
  //setting the element width and height to options array
    $(element).css({
      width: options[0],
      height: options[1],
      "border": "1px solid black"
    });
}


$(document).ready(function () {
  alert("hello world!");
});

drawBarChart(data, options, element);
