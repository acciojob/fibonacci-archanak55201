function fibonacci(num) {
	if(num===1){
		return num;
	}
	let n= fibonacci(num-1)+fibonacci(num-2);
	return n;
// your code here
}

module.exports = fibonacci;
