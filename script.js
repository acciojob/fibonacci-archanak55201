function fibonacci(num) {
	if(num==1){
		return 0;
	}
	if(num==2){
		return 1;
	}
	let n= fibonacci(num-1)+fibonacci(num-2);
	return n;
// your code here
}

module.exports = fibonacci;
