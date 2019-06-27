// This function takes in epoch time
var myArray = [];
var cubs_not_avail = 0;
//var time_it_takes_to_cook = 600; //For now
var time_array = [];
var diff_in_time = 300; // For now, 1pm, 1:05pm, 1:10pm
var total_cubs = 0;
var new_count2 = 0;
var counter=[];
var time_array = [];
var unavail_array = [];
var unavail_count = [];
var current_time = 1561497708; // This can change
var acc_array = [];
// 1 Truck
//		3	1pm
//		0	1:05pm
//		3	1:10pm
//


function countArray(time,arr,diff_time){ // After, Before
	var counter1 = 0;
	var counter2 = 0;
	for(let i =0; i < arr.length;i++){
		if (arr[i] == time+diff_time){
			counter1++;
		}
		if (arr[i] == time-diff_time){
			counter2++;
		}

	}
	return [counter1,counter2];
}




function addOrderToTimeWindow(time){


	counter = countArray(time,myArray,diff_in_time);
	total_cubs = counter[0] + counter[1]

	if (cubs_not_avail < 3 && cubs_not_avail >= 0 && total_cubs != 6 && counter[0] != 3 && counter[1] != 3 && !time_array.includes(time)){
		myArray.push(time);
		cubs_not_avail++;
	}


	if (cubs_not_avail == 3 || total_cubs == 6 && counter[0] == 3 && counter[1] == 3){
		time_array.push(time);
		cubs_not_avail = 0;
	}

	return [myArray,time_array];

}

function timesUnavailable(start_time,end_time){ // not sure of parameters


	if (start_time >= end_time){
		throw new Error("Incorrect Input");
	}

	rand_array = addOrderToTimeWindow(current_time);
	unavail_array = rand_array[1]


	for (let i = 0; i < unavail_array.length; i++){
		if (unavail_array[i] <= end_time && unavail_array[i] >= start_time){
			acc_array.push(unavail_array[i]);
		}
	}

	return acc_array

}




function testTimes(){

}

/*if (myArray.includes(time+diff_in_time)){
			total_cubs++;

		}														!time_array.includes(time) && !dupli_array.includes(time)
		if (myArray.includes(time-diff_in_time)){
			new_count2++;

		}
//var counts = {};
//your_array.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });


1561486080
        1561486140
        1561486320        
        1561486380
        1561486440
        1561486560
        1561486620
        1561486680
        1561486920
        1561486980


	start_time,end_time

console.log(addOrderToTimeWindow(1561497708)) 
console.log(addOrderToTimeWindow(1561497708)) 
console.log(addOrderToTimeWindow(1561497708)) 
console.log(addOrderToTimeWindow(1561497708)) 


console.log(addOrderToTimeWindow(1561498308)) 
console.log(addOrderToTimeWindow(1561498308)) 
console.log(addOrderToTimeWindow(1561498308)) 
console.log(addOrderToTimeWindow(1561498308)) 


console.log(addOrderToTimeWindow(1561498008)) 

console.log(timesUnavailable())


*/

//module.exports = { addOrderToTimeWindow };

/*
try {
	console.log(timesUnavailable(124,123,5));
}
catch(e) {
	console.log("Caught an error", e);
}	
*/
console.log(addOrderToTimeWindow(1561497708)) 
console.log(addOrderToTimeWindow(1561497708)) 
console.log(addOrderToTimeWindow(1561497708)) 
console.log(addOrderToTimeWindow(1561497708)) 


console.log(addOrderToTimeWindow(1561498308)) 
console.log(addOrderToTimeWindow(1561498308)) 
console.log(addOrderToTimeWindow(1561498308)) 
console.log(addOrderToTimeWindow(1561498308)) 


console.log(addOrderToTimeWindow(1561498008)) 

console.log(timesUnavailable(1561497708, 1561498308))









