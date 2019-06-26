const timeslot = require('./Timeslot');

const addOrderToTimeWindow = timeslot.addOrderToTimeWindow;

test.skip('it fails', () => {
	expect(1).toBe(2)
});

it('should add numbers into its list', () => {
	let myReturnedArray;
	myReturnedArray = addOrderToTimeWindow(1561497708);
	expect(myReturnedArray).toHaveLength(1);
	expect(myReturnedArray.includes(1561497708)).toBeTruthy();
});

//	console.log(addOrderToTimeWindow(1561497708)) 
//	console.log(addOrderToTimeWindow(1561497708)) 
//	console.log(addOrderToTimeWindow(1561497708)) 
//
//
//	console.log(addOrderToTimeWindow(1561498308)) 
//	console.log(addOrderToTimeWindow(1561498308)) 
//	console.log(addOrderToTimeWindow(1561498308)) 
