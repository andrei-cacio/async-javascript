// Question1: What will be the ouput of this?
// Question2: Why?

setTimeout(() => {
	console.log('first');
});

console.log('second')

var a = setTimeout(() => {
	console.log('third');
}, 200);

setTimeout(() => {
	console.log('forth');
}, 100);

console.log(a);


