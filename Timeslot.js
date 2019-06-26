// This function takes in epoch time
var myArray = [];
var cubs_not_avail = 0;
var count = 0;
var time_it_takes_to_cook = 600; //For now
var time_array = [];
var dupli_array = [];
var diff_in_time = 300; // For now, 1pm, 1:05pm, 1:10pm
var new_count1 = 0;
var new_count2 = 0;
var counts = {};
// 1 Truck
//		3	1pm
//		0	1:05pm
//		3	1:10pm
//
function addOrderToTimeWindow(time){


	if (
		cubs_not_avail < 3 && 
		cubs_not_avail >=0 && 
		!time_array.includes(time)
		&& !dupli_array.includes(time)
	){
		myArray.push(time);
		cubs_not_avail++;
	}

	if (cubs_not_avail == 3){
		for (i =0; i <3; i++){
			if(myArray[i] == time){
					count++;
			}
		}
	}

	if (count == 3){
		time_array.push(time);
		cubs_not_avail = 0;
		count=0;
	}

	myArray.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
	new_count1 = counts[time] - 1;
	if (new_count1 == 3){
		new_count1 -= 3;
	}
	console.log(new_count1);


		
	if (new_count1 == 3 || new_count2 == 3){

		dupli_array.push(time);
		new_count1 = 0;
		new_count2 = 0;

	}

	if (
		cubs_not_avail < 3 && 
		cubs_not_avail >=0 && 
		!time_array.includes(time)
		&& !dupli_array.includes(time)
	){
		myArray.push(time);
		cubs_not_avail++;
	}


	return myArray

}

function timesUnavailable(){



}
/*if (myArray.includes(time+diff_in_time)){
			new_count1++;

		}
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

*/


console.log(addOrderToTimeWindow(1561497708)) 
console.log(addOrderToTimeWindow(1561497708)) 
console.log(addOrderToTimeWindow(1561497708)) 


console.log(addOrderToTimeWindow(1561498308)) 
console.log(addOrderToTimeWindow(1561498308)) 
console.log(addOrderToTimeWindow(1561498308)) 

console.log(addOrderToTimeWindow(1561498009)) 









