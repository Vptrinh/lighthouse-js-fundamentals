const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function (moves) {
  let start = [0,0];
  for (const start of moves){
    if (moves === 'north'){
	start[0] = start[0]+1;
  } 
    else if (moves === 'east'){
    start.push(start[1] + 1);
    }
      else if (moves === 'west'){
      start.push(start[1] - 1);
      }
}
return start
}

console.log (finalPosition(moves))
