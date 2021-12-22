function howManyHundreds(num){
	const numberOfHundreds = (num / 100)-((num%100)100))
	return numberOfHundreds;
}

console.log(howManyHundreds(1230))
console.log(howManyHundreds(1000))
console.log(howManyHundreds(894))
console.log(howManyHundreds(520))
console.log(howManyHundreds(99))
console.log(howManyHundreds(0))
