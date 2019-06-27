
var counter = 5;
function countArray(time,arr,diff_time){
	counter = 0;
	/*for(let i =0; i < arr.length;i++){
		if (arr[i] == time+diff_time || arr[i] == time-diff_time){
			counter++;
		}
	}*/
	console.log(counter);
	return counter;
}


console.log(countArray(500,[200,200,200,800,500,800,500,800],300));