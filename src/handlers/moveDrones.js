const moveR = require('./utils/moveR.js');
const moveM = require('./utils/moveM.js');
const moveL = require('./utils/moveL.js');

let finalPositions = [];

module.exports = (dronesData) => {
	for (let j=0; j<dronesData.length; j++) {
		let [[x, y, direction], actionDrone] = [dronesData[j][0].split(' '), dronesData[j][1]];
		x = parseInt(x);
		y = parseInt(y);
		for (let i=0; i<actionDrone.length; i++) {
			if (actionDrone[i]==='L') {
				direction = moveL(direction);
			} else if (actionDrone[i]==='R') {
				direction = moveR(direction);
			} else if (actionDrone[i]==='M') {
				[x, y] = moveM(x, y, direction);    
			}
		}
		finalPositions.push([x,y,direction]);
	}
	return finalPositions;
};
