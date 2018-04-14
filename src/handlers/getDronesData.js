const readline = require('readline-sync');

const isValidArea = require('./utils/isValidArea');
const isValidPosition = require('./utils/isValidPosition');
const areValidActions = require('./utils/areValidActions');

let [area, position, actions, dronesData, droneCounter, moreDrones, noMoreDronesMsg] = ['','','',[],1,true,': '];

module.exports = () => {
	while (moreDrones) {
		if (area==='') {
			area = readline.question('Area a sobrevolar: ');
			while (!isValidArea(area)) {
				console.log('Area a sobrevolar no válida, debe introducir dos números separados por un espacio. Por ejemplo "5 3". Inténtelo de nuevo.');
				area = readline.question('Area a sobrevolar: ');
			}
		} else {
			if (dronesData.length!==0) {
				noMoreDronesMsg = ' (si no quiere introducir mas drones, marque 0): ';
			}
			position = readline.question('Posicion inicial dron ' + droneCounter + noMoreDronesMsg);
			while (!isValidPosition(position, droneCounter===1)) {
				console.log('Posicion dron ' + droneCounter + ' no válida, la posicion debe contener las coordenadas x, y además de la dirección(N, S, E o O). Por ejemplo "3 3 E". Inténtelo de nuevo.');
				position = readline.question('Posicion inicial dron ' + droneCounter + noMoreDronesMsg);
			}
			if (position!=='0') {
				actions = readline.question('Movimientos dron ' + droneCounter + ': ');
				while (!areValidActions(actions)) {
					console.log('Movimientos dron ' + droneCounter + ' no válidos, los movimientos pueden ser R, L o M. Inténtelo de nuevo.');
					actions = readline.question('Movimientos dron ' + droneCounter + ': ');
				}
				dronesData.push([position, actions]);
				droneCounter++;
			} else {
				moreDrones = false;
			}
		}
	}
	return [area, dronesData];
};
