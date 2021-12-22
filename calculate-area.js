function calculateRectangleArea(length,width){


	const area = length*width;
	return area
}

function calculateTriangleArea(base,height){
	const area = base*height/2;
	return area
}

function calculateCircleArea(radius){
	const pi = 3.1415
	const area = pi*radius^2;
	return area

}


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined
