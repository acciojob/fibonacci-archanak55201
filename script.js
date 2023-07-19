function fibonacci(num) {
	if(num<=2){
		return num-1;
	}
	let a=0,b=1;
	for(let i=3;i<=num;i++){
		let c=a+b;
		
		a=b;
		b=c;
	}	
	return b;
// your code here
}

module.exports = fibonacci;
