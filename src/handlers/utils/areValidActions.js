module.exports = (actions) => {
	for (let i=0; i<actions.length; i++) {
		if (actions[i]!=='L' && actions[i]!=='R' && actions[i]!=='M') {
			return false;
		}
	}
	return true;
};