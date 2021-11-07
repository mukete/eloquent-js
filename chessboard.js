let chess = "";
let rows = 8;

for(let i = 0; i < rows; i++) {
	for(let j = 0; j < rows; j++) {
		if((i + j) % 2 == 0) {
			chess += " ";
		}
		else {
			chess += "#";
		}
	}

	chess += "\n"
}
console.log(chess);