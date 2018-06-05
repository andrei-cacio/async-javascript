// Exercise: Write a function which will let you konw when all the async calls are done

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
