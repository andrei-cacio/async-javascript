// Exercise: Write a function which will let you know when the first async call is done

setTimeout(() => {
	console.log('first');
});

console.log('second')

setTimeout(() => {
	console.log('third');
}, 200);

setTimeout(() => {
	console.log('forth');
}, 100);
