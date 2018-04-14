const isValidArea = require('../src/handlers/utils/isValidArea');
const isValidPosition = require('../src/handlers/utils/isValidPosition');
const areValidActions = require('../src/handlers/utils/areValidActions');
const moveL = require('../src/handlers/utils/moveL');
const moveR = require('../src/handlers/utils/moveR');
const moveM = require('../src/handlers/utils/moveM');
const moveDrones = require('../src/handlers/moveDrones');
const assert = require('assert');

suite('isValidArea', () => {

	test('Should return false if the area passed contains letters', () => {
		assert.equal(false, isValidArea('L L'));
	});
	
	test('Should return false if the area passed contains more than two numbers', () => {
		assert.equal(false, isValidArea('3 10 2'));
	});

	test('Should return false if the area passed contains only one number', () => {
		assert.equal(false, isValidArea('5'));
	});

	test('Should return true if the area passed contains two numbers', () => {
		assert.equal(true, isValidArea('3 15'));
	});

});

suite('isValidPosition', () => {

	test('Should return false if the position passed contains more than 2 numbers', () => {
		assert.equal(false, isValidPosition('3 3 2 N'));
	});
	
	test('Should return false if the position passed contains more than one letter', () => {
		assert.equal(false, isValidPosition('3 3 L N'));
	});

	test('Should return false if the position passed contains incorrect letter direction', () => {
		assert.equal(false, isValidPosition('3 3 J'));
	});

	test('Should return false if the position passed is not in correct order', () => {
		assert.equal(false, isValidPosition('N 4 4'));
	});

	test('Should return true if the position passed is 0 (No more drones).', () => {
		assert.equal(true, isValidPosition('0'));
	});

	test('Should return true if the position passed is correct', () => {
		assert.equal(true, isValidPosition('1 1 S'));
	});

});

suite('areValidActions', () => {

	test('Should return false if the actions passed are LLK', () => {
		assert.equal(false, areValidActions('LLK'));
	});
	
	test('Should return true if the actions passed are LLMMRR', () => {
		assert.equal(true, areValidActions('LLMMRR'));
	});

});

suite('moveL', () => {

	test('Should return N if the direction passed as argument is E', () => {
		assert.equal('N', moveL('E'));
	});
	
	test('Should return O if the direction passed as argument is N', () => {
		assert.equal('O', moveL('N'));
	});

});

suite('moveR', () => {

	test('Should return N if the direction passed as argument is O', () => {
		assert.equal('N', moveR('O'));
	});
	
	test('Should return O if the direction passed as argument is S', () => {
		assert.equal('O', moveR('S'));
	});
	
});

suite('moveM', () => {

	test('Should return [1, 0] if the position passed as argument is 0 0 E', () => {
		assert.deepEqual([1, 0], moveM(0, 0, 'E'));
	});
	
	test('Should return [0, 1] if the position passed as argument is 0 0 N', () => {
		assert.deepEqual([0, 1], moveM(0, 0, 'N'));
	});

	test('Should return [0, -1] if the position passed as argument is 0 0 S', () => {
		assert.deepEqual([0, -1], moveM(0, 0, 'S'));
	});
	
	test('Should return [-1, 0] if the position passed as argument is 0 0 O', () => {
		assert.deepEqual([-1, 0], moveM(0, 0, 'O'));
	});
	
});

suite('moveDrones', () => {

	test('Should return [[5, 3, O], [3, 3, O]] if dronesData passed is [[3 3 E, MMRR], [3 3 E, LL]]', () => {
		assert.deepEqual([[5, 3, 'O'], [3, 3, 'O']], moveDrones([['3 3 E', 'MMRR'], ['3 3 E', 'LL']]));
	});
		
});

