module.exports = (position, isFirst) => {
	if (position==0 && !isFirst) {
		return true;
	}
	let positionArray = position.split(' ');
	if (positionArray.length!==3) {
		return false;
	}
	let direction = positionArray[2];
	if (!isNaN(direction) || (direction!=='N' && direction!=='S' && direction!=='E' && direction!=='O')) {
		return false;
	}
	for (let i=0; i<2; i++) {
		if (isNaN(positionArray[i])) {
			return false;
		}
	}
	return true;
};