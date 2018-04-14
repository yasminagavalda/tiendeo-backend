module.exports = (area) => {
	let areaArray = area.split(' ');
	if (areaArray.length!==2) {
		return false;
	}
	for (let i=0; i<areaArray.length; i++) {
		if (isNaN(areaArray[i])) {
			return false;
		}
	}
	return true;
};