module.exports = (x, y, direction) => {
	if (direction==='N') {
		y = y+1;
	} else if (direction==='S') {
		y = y-1;
	} else if (direction==='E') {
		x = x+1;
	} else if (direction==='O') {
		x = x-1;
	}
	return [x, y];
};
