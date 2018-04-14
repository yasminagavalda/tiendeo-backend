module.exports = (finalPositions, area) => {
	let [xArea, yArea] = area.split(' ');
	for (let i=0; i<finalPositions.length; i++) {
		let [xDrone, yDrone] = finalPositions[i];
		let msgOutOfArea = '';
		if (xDrone>xArea || yDrone>yArea) {
			msgOutOfArea =' (El dron ha salido del area a sobrevolar)';
		}
		console.log('Posicion final dron ' + parseInt(i+1) + ': ' + finalPositions[i].join(' ') + msgOutOfArea);
	}
};
