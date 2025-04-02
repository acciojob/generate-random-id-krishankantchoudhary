function makeid(l) {
  // write your code here
	var res="";
	var charlist="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(var i=0; i<l; i++){
		res=res+charlist.charAt(
			Math.floor(Math.random()*charlist.length
		)
		)
			
	}
	return res;
	
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
