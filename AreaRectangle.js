function calculateArea(length, width) {

    if(length <= 0) {
        throw new RangeError('Length cannot be negative');
    }

    if(width <= 0) {
        throw new RangeError('Width cannot be negative');
    }

    const area = length * width;
    console.log('Area if a rectangle is: ', area);
}

calculateArea(2, 3);
calculateArea(200, 350);


calculateArea(2, -350);
calculateArea(2, -350);
