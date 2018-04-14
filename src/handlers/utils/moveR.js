module.exports = (direction) => {
	if (direction==='N') {
		direction = 'E';
	} else if (direction==='E') {
		direction = 'S';
	} else if (direction==='S') {
		direction = 'O';
	} else if (direction==='O') {
		direction = 'N';
	}
	return direction;
};
