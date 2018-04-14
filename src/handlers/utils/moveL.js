module.exports = (direction) => {
	if (direction==='N') {
		direction = 'O';
	} else if (direction==='E') {
		direction = 'N';
	} else if (direction==='S') {
		direction = 'E';
	} else if (direction==='O') {
		direction = 'S';
	}
	return direction;
};
