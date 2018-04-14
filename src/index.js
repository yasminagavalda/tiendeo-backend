const getDronesData = require('./handlers/getDronesData.js');
const moveDrones = require('./handlers/moveDrones.js');
const showFinalPositions = require('./handlers/showFinalPositions.js');

const [area, dronesData] = getDronesData();

const finalPositions = moveDrones(dronesData);

showFinalPositions(finalPositions, area);


