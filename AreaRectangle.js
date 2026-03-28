function calculateArea(length, width) {

    if(length <= 0) {
        throw new RangeError("Length cannot be negative");
    }

    if(width <= 0) {
        throw new RangeError("Width should be positive number");
    }

  const area = length * width;
  console.log("Area of a rectangle is", area);
}
 

calculateArea(3, 2);
// calculateArea(200, 350);
// calculateArea(-2, -350);  
calculateArea(2, 0);
calculateArea(2, 350);

