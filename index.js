// JavaScript File
function calculateCircumfrence() {
        let π = 3.1416;
        let diameter = document.getElementById("cdiameter1").value;
        let radius = diameter/2;
        let circumfrence = 2*π*radius;
        alert ("The circumfrence of the circle is "+ circumfrence);
      }
function calculateArea() {
        let π = 3.1416;
        let diameter = document.getElementById("cdiameter2").value;
        let radius = diameter/2;
        let circleArea = π*radius*radius;
        alert ("The area of the circle is "+ circleArea);
      }